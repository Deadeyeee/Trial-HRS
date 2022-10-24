const { paymentMode, discount, reservationSummary, orderedAmenities } = require("../models");
const db = require("../models");
const Payment = db.payment;
// import Logo from "../../../FRONTEND/src/images/logo.png";
const multer = require('multer')
const path = require('path');
const fs = require('fs')



exports.create = async (req, res) => {
    try {
        const new_payment = await Payment.create(req.body);
        return res.status(200).send({ new_payment });
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const payment = await Payment.findAll(
        {
            include: [
                { model: paymentMode },
                { model: discount }
            ]
        });
    return res.status(200).send(payment);
};

exports.findOne = async (req, res) => {
    const payment = await Payment.findByPk(req.params.id,
        {
            include: [
                { model: paymentMode },
                { model: discount }
            ]
        });
    return res.status(200).send(payment);
};

exports.updatePhoto = async (req, res) => {
    try {
        // console.log(req.file.path)
        let info = {
            paymentStatus: req.body.paymentStatus,
            paymentImage: req.body.paymentImage ? null : req.file.path,
            // paymentMade: req.body.paymentMade,
            // grandTotal: req.body.grandTotal,
            // balance: req.body.balance,
            // discountValid: req.body.discountValid,
            // paymentType: req.body.paymentType,
            // paymentMode_id: req.body.paymentMode_id,
            // discount_id: req.body.discount_id,

        }
        await Payment.update(info, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Payment information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.update = async (req, res) => {
    try {

        let info = {
            paymentImage: req.body.paymentImage,
            paymentMade: req.body.paymentMade,
            grandTotal: req.body.grandTotal,
            balance: req.body.grandTotal - req.body.balance,
            discountValid: req.body.discountValid,
            paymentType: req.body.paymentType,
            paymentStatus: req.body.paymentStatus,
            paymentMode_id: req.body.paymentMode_id,
            discount_id: req.body.discount_id,

        }
        const update_payment = await Payment.update(info, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send({ update_payment });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};



exports.updateGrandTotal = async (req, res) => {
    try {

        const getTotal = await reservationSummary.findAll(
            { include: { all: true, nested: true } }
        );
        
        const getamenitiesTotal = await orderedAmenities.findAll(
            { include: { all: true, nested: true } });

        const getpayment = await Payment.findByPk(req.params.id,
            {
                include: [
                    { model: paymentMode },
                    { model: discount }
                ]
            });
        let grandTotal = 0;
        let paymentStatus = '';


        getTotal.map((item) => {
            if (req.params.id == item.dataValues.reservation.payment.id) {
                grandTotal += (item.dataValues.room.roomType.roomRate * item.dataValues.numberOfNights) + parseInt(item.dataValues.others);
                // console.log(item.dataValues.room.roomType.roomRate * item.Values.numberOfNights)
            }
        })

        getamenitiesTotal.map((item)=>{
            if(req.params.id == item.dataValues.reservationSummary.reservation.payment.id){
                grandTotal += (item.dataValues.quantity * item.dataValues.amenity.amenityRate)
            }
        })

        if (getpayment.discountValid == true) {
            grandTotal = grandTotal * .80;
        }

        if (grandTotal - req.body.paymentMade == 0) {
            paymentStatus = 'fully paid'
        }
        else if (grandTotal - req.body.paymentMade == grandTotal / 2) {
            paymentStatus = 'partial'
        }
        else if(grandTotal - req.body.paymentMade == grandTotal){
            paymentStatus = 'pending'
        }
        else {
            paymentStatus = 'partial'
        }
        console.log(grandTotal)

        let info = {
            // paymentImage: req.file.path,
            grandTotal: grandTotal,
            balance: grandTotal - req.body.paymentMade,
            paymentMade: req.body.paymentMade,
            paymentStatus: paymentStatus,

        }

        const update_payment = await Payment.update(info, {
            where: {
                id: req.params.id,
            },
            returning: true,
            plain: true,
        });

        const updated_payment = await Payment.findByPk(req.params.id,
            {
                include: [
                    { model: paymentMode },
                    { model: discount }
                ]
            });
        return res.status(200).send(updated_payment);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/Images/PaymentReciept')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage: storage,
    limits: { fileSize: '100000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|JPG|JPEG|PNG/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('paymentImage')


exports.delete = async (req, res) => {
    try {
        await Payment.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Payment deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};



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