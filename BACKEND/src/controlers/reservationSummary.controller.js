const db = require("../models");
const ReservationSummary = db.reservationSummary;
const moment = require('moment')
// import Logo from "../../../FRONTEND/src/images/logo.png";
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

exports.create = async (req, res) => {
    try {
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

exports.findOne = async (req, res) => {
    const reservationSummary = await ReservationSummary.findByPk(req.params.id,
        { include: { all: true, nested: true } });
    return res.status(200).send(reservationSummary);
};

exports.update = async (req, res) => {
    try {
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
            { include: { all: true, nested: true } }
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