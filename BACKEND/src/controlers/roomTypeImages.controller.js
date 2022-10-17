const db = require("../models");
const RoomTypeImages = db.roomTypeImages;
// import Logo from "../../../FRONTEND/src/images/logo.png";

const multer = require('multer')
const path = require('path');
const fs = require('fs')


exports.create = async (req, res) => {
    try {
        let items = {
            roomImages: req.body.roomImages ? null : req.file.path,
            roomType_id: req.body.roomType_id,
        }
        const new_roomTypeImages = await RoomTypeImages.create(items);
        return res.status(200).send({new_roomTypeImages});
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const roomTypeImages = await RoomTypeImages.findAll();
    return res.status(200).send(roomTypeImages);
};

exports.findOne = async (req, res) => {
    const roomTypeImages = await RoomTypeImages.findByPk(req.params.id);
    return res.status(200).send(roomTypeImages);
};

exports.update = async (req, res) => {
    try {
        await RoomTypeImages.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("RoomType Images information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await RoomTypeImages.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("RoomType Images deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/Images/Rooms')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


exports.upload = multer({
    storage: storage,
    limits: { fileSize: '100000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files format to upload')
    }
}).single('roomImages')



exports.ImageDelete = async (req, res) => {
    let filePath = req.body.filePath;
    fs.unlink(filePath, handleCallback);
    function handleCallback(error) {
        if (error) {
            return res.status(400).send(error.message);
        }
        else {

            return res.status(200).send("Successfully deleted");

        }
    }
}