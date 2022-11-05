const db = require("../models");
const DeleteConversation = db.deleteConversation;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_deleteConversation = await DeleteConversation.create(req.body);
        return res.status(200).send({new_deleteConversation});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const deleteConversation = await DeleteConversation.findAll();
    return res.status(200).send(deleteConversation);
};

exports.findOne = async (req, res) => {
    const deleteConversation = await DeleteConversation.findByPk(req.params.id);
    return res.status(200).send(deleteConversation);
};

exports.update = async (req, res) => {
    try {
        await DeleteConversation.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Delete Conversation information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await DeleteConversation.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Delete Conversation deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
