const { roomType, services } = require("../models");
const db = require("../models");
const UsedServices = db.usedServices;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_usedServices = await UsedServices.create(req.body);
        return res.status(200).send({new_usedServices});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const usedServices = await UsedServices.findAll(
        {
            include:
            [
                {
                    model: roomType,
                },
                {
                    model: services,
                }
            ]
        }
    );
    return res.status(200).send(usedServices);
};

exports.findOne = async (req, res) => {
    const usedServices = await UsedServices.findByPk(req.params.id);
    return res.status(200).send(usedServices);
};

exports.update = async (req, res) => {
    try {
        await UsedServices.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Used Services information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await UsedServices.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Used Services deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
