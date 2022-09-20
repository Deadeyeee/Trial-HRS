const db = require("../models");
const Discount = db.discount;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_discount = await Discount.create(req.body);
        return res.status(200).send({new_discount});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const discount = await Discount.findAll();
    return res.status(200).send(discount);
};

exports.findOne = async (req, res) => {
    const discount = await Discount.findByPk(req.params.id);
    return res.status(200).send(discount);
};

exports.update = async (req, res) => {
    try {
        await Discount.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Discount information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Discount.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Discount deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
