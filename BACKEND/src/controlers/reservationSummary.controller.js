const db = require("../models");
const ReservationSummary = db.reservationSummary;
const moment = require('moment');
const { room, roomType } = require("../models");
// import Logo from "../../../FRONTEND/src/images/logo.png";
const { Op } = require("sequelize");

function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}



// const test = async () => {

//     const roomData = await room.findByPk('2bdc7d55-830e-4366-8687-7c425499bc65', {
//         include: roomType

//     })
//     console.log('\n\n\n\n\n', roomData.roomNumber, '\n\n\n\n\n',)
//     console.log('\n\n\n\n\n', roomData.roomType.dataValues.roomRate, '\n\n\n\n\n',)
//     console.log('\n\n\n\n\n', roomData.roomType.dataValues.roomType, '\n\n\n\n\n',)
//     // console.log('\n\n\n\n\n', room.amenityRate, '\n\n\n\n\n',)
//     // console.log('\n\n\n\n\n', room.amenityRate, '\n\n\n\n\n',)
// }

// test()


exports.create = async (req, res) => {
    try {

        let data = req.body;
        const roomData = await room.findByPk(req.body.room_id, {
            include: roomType

        })
        data.roomType = roomData.roomType.dataValues.roomType
        data.roomNumber = roomData.roomNumber
        data.roomRate = roomData.roomType.dataValues.roomRate
        data.total = parseFloat(roomData.roomType.dataValues.roomRate) * req.body.numberOfNights

        const new_reservationSummary = await ReservationSummary.create(req.body,
            { include: { all: true, nested: true } });
        return res.status(200).send({ new_reservationSummary });
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const reservationSummary = await ReservationSummary.findAll(
        { include: { all: true, nested: true } }
    );
    return res.status(200).send(reservationSummary);
};


exports.countReservedRooms = async (req, res) => {
    const reservationSummary = await ReservationSummary.findAll(
        {
            where: {
                reservation_id: req.params.id,
            },
            include: { all: true, nested: true }
        },

    );
    return res.status(200).send(reservationSummary);
};


exports.findOne = async (req, res) => {
    const reservationSummary = await ReservationSummary.findByPk(req.params.id,
        { include: { all: true, nested: true } });
    return res.status(200).send(reservationSummary);
};

exports.update = async (req, res) => {
    try {

        let data = req.body;


        if (req.body.room_id) {
            const roomData = await room.findByPk(req.body.room_id, {
                include: roomType
            })




            data.roomType = roomData.roomType.dataValues.roomType
            data.roomNumber = roomData.roomNumber
            data.roomRate = roomData.roomType.dataValues.roomRate

            data.total = parseFloat(roomData.roomType.dataValues.roomRate) * req.body.numberOfNights


        }
        await ReservationSummary.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Reservation Summary information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await ReservationSummary.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Reservation Summary deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};


exports.checkUnavailableRoom = async (req, res) => {

    try {


        const reservationSummary = await ReservationSummary.findAll(
            {
                where: {
                    bookingStatus: { [Op.or]: ['PENDING', 'PENDING', 'CHECKED-IN'] },
                },

                include: { all: true, nested: true }
            },
            
        );

    let item = {
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        roomId: req.body.roomId,
    }
    let isValid = true;

    for (let index = 0; index < reservationSummary.length; index++) {
        for (let index2 = 0; index2 < req.body.availedRoomData.length; index2++) {
            if (reservationSummary[index].dataValues.room_id == req.body.availedRoomData[index2].id) {
                let reservationSummaryDates = getDates(reservationSummary[index].dataValues.checkInDate, reservationSummary[index].dataValues.checkOutDate)
                reservationSummaryDates.pop();
                let availedRoomDates = getDates(req.body.availedRoomData[index2].checkIn, req.body.availedRoomData[index2].checkOut)
                availedRoomDates.pop();

                for (let i = 0; i < reservationSummaryDates.length; i++) {
                    for (let j = 0; j < availedRoomDates.length; j++) {

                        if (reservationSummaryDates[i] == availedRoomDates[j]) {

                            isValid = false;
                        }

                    }
                }
            }
        }
    }
    return res.status(200).send(isValid);
} catch (error) {
    console.log(error)
}
}