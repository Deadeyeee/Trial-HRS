const db = require("../models");
const ReservationSummary = db.reservationSummary;
// import Logo from "../../../FRONTEND/src/images/logo.png";



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
