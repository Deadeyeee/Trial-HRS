const db = require("../models");
const Services = db.services;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_services = await Services.create(req.body);
        return res.status(200).send({new_services});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const services = await Services.findAll();
    return res.status(200).send(services);
};

exports.findOne = async (req, res) => {
    const services = await Services.findByPk(req.params.id);
    return res.status(200).send(services);
};

exports.update = async (req, res) => {
    try {
        await Services.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Services information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Services.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Services deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
