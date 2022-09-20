const db = require("../models");
const Amenities = db.amenities;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_amenity = await Amenities.create(req.body);
        return res.status(200).send({new_amenity});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const amenities = await Amenities.findAll();
    return res.status(200).send(amenities);
};

exports.findOne = async (req, res) => {
    const amenities = await Amenities.findByPk(req.params.id);
    return res.status(200).send(amenities);
};

exports.update = async (req, res) => {
    try {
        await Amenities.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Amenities information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Amenities.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Amenities deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
