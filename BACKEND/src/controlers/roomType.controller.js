const db = require("../models");
const RoomType = db.roomType;
// import Logo from "../../../FRONTEND/src/images/logo.png";
const multer = require('multer')
const path = require('path');
const { services, usedServices } = require("../models");


exports.create = async (req, res) => {
    try {
        let items = {
            roomType: req.body.roomType,
            roomNumber: req.body.roomNumber,
            roomStatus: req.body.roomStatus,
            roomRate: req.body.roomRate,
            maxAdultOccupancy: req.body.maxAdultOccupancy,
            maxKidsOccupancy: req.body.maxKidsOccupancy,
            roomDescription: req.body.roomDescription,
            // roomImages: req.files,
        }

        const new_roomType = await RoomType.create(items);
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
        
        let items = {
            roomType: req.body.roomType,
            roomNumber: req.body.roomNumber,
            roomStatus: req.body.roomStatus,
            roomRate: req.body.roomRate,
            maxAdultOccupancy: req.body.maxAdultOccupancy,
            maxKidsOccupancy: req.body.maxKidsOccupancy,
            roomDescription: req.body.roomDescription,
            status: req.body.status,
            // roomImages: JSON.parse(req.body.roomImages),
        }
        await RoomType.update(items, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Room Type information updated successfully");
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

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).array('roomImages')