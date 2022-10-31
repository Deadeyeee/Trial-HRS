const { guestInformation, user, message } = require("../models");
const db = require("../models");
const Conversation = db.conversation;
// import Logo from "../../../FRONTEND/src/images/logo.png";



exports.create = async (req, res) => {
    try {
        const new_conversation = await Conversation.create(req.body);
        return res.status(200).send({ new_conversation });
    } catch (error) {
        return res.status(200).send(error.conversation);
    }
};

exports.findAll = async (req, res) => {
    const conversation = await Conversation.findAll({

        include: [
            { model: guestInformation, as: 'conversationFrom', include: user },
            { model: guestInformation, as: 'conversationTo', include: user },
            // {
            //     model: message, as: 'message', required: true, include: [
            //         { model: guestInformation, as: 'messageTo', include: user },
            //     ]
            // }
        ]

        // include: [{
        //     model: User,
        // //  required: false
        //    }]
    });
    return res.status(200).send(conversation);
};

exports.findOne = async (req, res) => {
    const conversation = await Conversation.findByPk(req.params.id,
        {

            include: [
                { model: guestInformation, as: 'conversationFrom', include: user },
                { model: guestInformation, as: 'conversationTo', include: user },
                { model: message, as: 'message', required: true, }
            ]
        }
    );
    return res.status(200).send(conversation);
};

exports.update = async (req, res) => {
    try {
        await Conversation.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Conversation information updated successfully");
    } catch (error) {
        return res.status(400).send(error.conversation);
    }
};

exports.delete = async (req, res) => {
    try {
        await Conversation.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Conversation deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.conversation);
    }
};
