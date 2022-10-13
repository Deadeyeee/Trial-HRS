const { payment, paymentMode, guestInformation, user, discount, reservationSummary } = require("../models");
const db = require("../models");
const Reservation = db.reservation;
// import Logo from "../../../FRONTEND/src/images/logo.png";



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
                { model: payment, include: [{model: paymentMode}, {model: discount}] },
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
                { model: payment, include: [{model: paymentMode}, {model: discount}] },
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