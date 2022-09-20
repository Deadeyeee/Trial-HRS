const db = require("../models");
const Room = db.room;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_room = await Room.create(req.body);
        return res.status(200).send({new_room});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const room = await Room.findAll();
    return res.status(200).send(room);
};

exports.findOne = async (req, res) => {
    const room = await Room.findByPk(req.params.id);
    return res.status(200).send(room);
};

exports.update = async (req, res) => {
    try {
        await Room.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Room information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Room.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Room deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
