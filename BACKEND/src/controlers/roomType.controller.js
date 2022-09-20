const db = require("../models");
const RoomType = db.roomType;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_roomType = await RoomType.create(req.body);
        return res.status(200).send({new_roomType});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const roomType = await RoomType.findAll();
    return res.status(200).send(roomType);
};

exports.findOne = async (req, res) => {
    const roomType = await RoomType.findByPk(req.params.id);
    return res.status(200).send(roomType);
};

exports.update = async (req, res) => {
    try {
        await RoomType.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("RoomType information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await RoomType.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("RoomType deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
