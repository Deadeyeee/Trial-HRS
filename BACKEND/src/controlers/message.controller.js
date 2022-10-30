const { guestInformation, conversation, user } = require("../models");
const db = require("../models");
const Message = db.message;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_message = await Message.create(req.body);
        return res.status(200).send({ new_message });
    } catch (error) {
        return res.status(200).send(error.message);
    }
};
//{ model: payment, include: [{model: paymentMode}, {model: discount}] },
exports.findAll = async (req, res) => {
    const message = await Message.findAll(
        {
            include: [
                {
                    model: conversation,
                    include: [
                        {model: guestInformation, as: 'conversationFrom', include: user},
                        {model: guestInformation, as: 'conversationTo', include: user}
                    ]
                }
            ]
        }
    );
    return res.status(200).send(message);
};

exports.findOne = async (req, res) => {
    const message = await Message.findByPk(req.params.id,
        {
            include: [
                {
                    model: conversation,
                    include: [
                        {model: guestInformation, as: 'conversationFrom', include: user},
                        {model: guestInformation, as: 'conversationTo', include: user}
                    ]
                }
            ]
        }
    );
    return res.status(200).send(message);
};

exports.update = async (req, res) => {
    try {
        await Message.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Message information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Message.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Message deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
