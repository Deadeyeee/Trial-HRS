const db = require("../models");
const Receipt = db.receipt;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_receipt = await Receipt.create(req.body);
        return res.status(200).send({new_receipt});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const receipt = await Receipt.findAll();
    return res.status(200).send(receipt);
};

exports.findOne = async (req, res) => {
    const receipt = await Receipt.findByPk(req.params.id);
    return res.status(200).send(receipt);
};

exports.update = async (req, res) => {
    try {
        await Receipt.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Receipt information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Receipt.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Receipt deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
