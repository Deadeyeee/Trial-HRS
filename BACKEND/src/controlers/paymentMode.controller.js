const db = require("../models");
const PaymentMode = db.paymentMode;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_paymentMode = await PaymentMode.create(req.body);
        return res.status(200).send({new_paymentMode});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const paymentMode = await PaymentMode.findAll();
    return res.status(200).send(paymentMode);
};

exports.findOne = async (req, res) => {
    const paymentMode = await PaymentMode.findByPk(req.params.id);
    return res.status(200).send(paymentMode);
};

exports.update = async (req, res) => {
    try {
        await PaymentMode.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("PaymentMode information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await PaymentMode.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("PaymentMode deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
