const db = require("../models");
const Payment = db.payment;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_payment = await Payment.create(req.body);
        return res.status(200).send({new_payment});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const payment = await Payment.findAll();
    return res.status(200).send(payment);
};

exports.findOne = async (req, res) => {
    const payment = await Payment.findByPk(req.params.id);
    return res.status(200).send(payment);
};

exports.update = async (req, res) => {
    try {
        await Payment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Payment information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Payment.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Payment deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
