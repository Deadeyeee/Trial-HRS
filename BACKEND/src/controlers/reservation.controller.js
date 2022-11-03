const { payment, paymentMode, guestInformation, user, discount, reservationSummary } = require("../models");
const db = require("../models");
const Reservation = db.reservation;
// import Logo from "../../../FRONTEND/src/images/logo.png";
const schedules = require('node-schedule')




const fetchUsers = async () => {
    try {
        const reservation = await Reservation.findAll(
            {
                include: [
                    { model: payment, include: [{ model: paymentMode }, { model: discount }] },
                    { model: guestInformation, include: [user] },
                ]
            }
        );


        reservation.filter((item) => {
            if (Date.now() - Date.parse(new Date(item.dataValues.reservationDate)) >= 86400000 && item.dataValues.reservationStatus == 'PENDING') {
                return item
            }
        }).map((item) => {
            Reservation.update({
                reservationStatus: 'UNSETTLED'
            }, {
                where: {
                    id: item.dataValues.id,
                },
            })

            
            reservationSummary.update({
                bookingStatus: 'NO-SHOW'
            }, {
                where: {
                    reservation_id: item.dataValues.id,
                },
            })

            payment.update({
                paymentStatus: 'cancelled'
            }, {
                where: {
                    id: item.dataValues.payment_id,
                },
            })

        })

        console.log('done')
    } catch (error) {
        console.log('\n\n\n\n\n', error)

    }
}


schedules.scheduleJob('* 1 * * *', async () => {
    fetchUsers()
    // console.log('YAWA')
})


exports.create = async (req, res) => {
    try {
        const new_reservation = await Reservation.create(req.body);
        return res.status(200).send({ new_reservation });
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const reservation = await Reservation.findAll(
        {
            include: [
                { model: payment, include: [{ model: paymentMode }, { model: discount }] },
                { model: guestInformation, include: [user] },
            ]
        }
    );
    return res.status(200).send(reservation);
};

exports.findOne = async (req, res) => {
    const reservation = await Reservation.findByPk(req.params.id,
        {
            include: [
                { model: payment, include: [{ model: paymentMode }, { model: discount }] },
                { model: guestInformation, include: [user] },
            ]
        }
    );
    return res.status(200).send(reservation);
};

exports.update = async (req, res) => {
    try {
        await Reservation.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Reservation information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Reservation.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Reservation deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};