const db = require("../models");
const OrderedAmenities = db.orderedAmenities;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_orderedAmenities = await OrderedAmenities.create(req.body);
        return res.status(200).send({ new_orderedAmenities });
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const orderedAmenities = await OrderedAmenities.findAll(
        { include: { all: true, nested: true } });
    return res.status(200).send(orderedAmenities);
};

exports.findOne = async (req, res) => {
    const orderedAmenities = await OrderedAmenities.findByPk(req.params.id,
        { include: { all: true, nested: true } }
    );
    return res.status(200).send(orderedAmenities);
};

exports.update = async (req, res) => {
    try {
        await OrderedAmenities.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Ordered amenities information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await OrderedAmenities.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Ordered amenities deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
