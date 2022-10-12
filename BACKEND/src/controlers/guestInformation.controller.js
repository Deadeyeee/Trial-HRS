const { user, payment } = require("../models");
const db = require("../models");
const Guest = db.guestInformation;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_guest = await Guest.create(req.body);
        return res.status(200).send({new_guest});
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const guest = await Guest.findAll(
        {
            include: user,
        }
    );
    return res.status(200).send(guest);
};

exports.findOne = async (req, res) => {
    const guest = await Guest.findByPk(req.params.id, 
        {
            include: user,
        });
    return res.status(200).send(guest);
};

exports.update = async (req, res) => {
    try {
        await Guest.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Guest information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Guest.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Guest information deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
