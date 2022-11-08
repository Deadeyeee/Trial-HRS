const db = require("../models");
const EmailAuto = require("../automatedEmail/EmailConfig")
const User = db.user;
const hbs = require('nodemailer-express-handlebars');
const config = require('../../config/auth.config');
const jwt = require('jsonwebtoken');
const path = require('path')
const bcrypt = require('bcrypt');
const ReservationSummary = db.reservationSummary;

// import Logo from "../../../FRONTEND/src/images/logo.png";
const numberFormat = (value) =>
    new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'PHP'
    }).format(value);


exports.create = async (req, res) => {
    try {
        const new_user = await User.create(req.body);
        return res.status(200).send({
            account: new_user,
        });
    } catch (error) {
        return res.status(400).send(error.message);

    }
};


exports.resendEmail = async (req, res) => {
    try {

        let token = jwt.sign(
            { id: req.body.id },
            config.auth.secret,
            {
                expiresIn: 200,
            }
        );
        const url = 'https://rmluxehotel.com/registered/' + token;

        EmailAuto.transporter.use('compile', hbs({
            viewEngine: {
                extName: ".handlebars",
                parialsDir: path.resolve('./src/views'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./src/views'),
            extName: ".handlebars",
        }));

        let info = {
            from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
            to: req.body.email,
            subject: "Email Confirmation", // Subject line
            template: 'email',
            context: {
                userName: req.body.userName,
                link: url,
                logo: "cid:logo",
            },
            attachments: [{
                filename: 'logo.png',
                path: './src/controlers/logo.png',
                cid: 'logo'
            }]
        };
        EmailAuto.transporter.sendMail(info);

        return res.status(200).send("mail sent");


    } catch (error) {

        return res.status(400).send(error.message);
    }
}

exports.sendReservationEmail = async (req, res) => {

    try {
        EmailAuto.transporter.use('compile', hbs({
            viewEngine: {
                extName: ".handlebars",
                parialsDir: path.resolve('./src/views'),
                defaultLayout: false,
                helpers: {
                    amountDue: (nights, amount) => numberFormat(nights * amount),
                    dateFormat: (date) => new Date(date).toLocaleDateString(),
                    timeFormat: (date) => new Date(date).toLocaleTimeString(),
                    numberFormat: (value) => numberFormat(value),
                    downPayment: (grand) => numberFormat(grand / 2),
                    remainingBalance: (total, paid) => numberFormat(total - paid),
                    paymentModecondition: (paymentModeValue) => {
                        if (paymentModeValue == 'Pay at The Hotel') {
                            return 'Gcash'
                        }
                        else {
                            return paymentModeValue;
                        }
                    },
                }
            },
            viewPath: path.resolve('./src/views'),
            extName: ".handlebars",
        }));

        let info;

        if (req.body.reservationStatus == 'PENDING') {

            const reservationSummary = await ReservationSummary.findAll(
                {
                    where: { reservation_id: req.body.reservationId },
                    include: { all: true, nested: true },
                }
            );
            // console.log("reservationSummary", reservationSummary)
            info = {
                from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
                to: req.body.email,
                subject: "Reservation Update", // Subject line
                template: 'reservationConfirmation',
                context: {
                    firstName: req.body.firstName,
                    accountName: req.body.accountName,
                    accountNumber: req.body.accountNumber,
                    payment: req.body.payment,
                    reservationNumber: req.body.reservationNumber,
                    paymentType: req.body.paymentType,
                    lastName: req.body.lastName,
                    reservationDate: req.body.reservationDate,
                    paymentMode: req.body.paymentMode,
                    bankName: req.body.paymentMode == 'Pay at The Hotel' ? 'Gcash' : req.body.paymentMode,
                    birthDay: req.body.birthDay,
                    nationality: req.body.nationality,
                    emailAddress: req.body.emailAddress,
                    address: req.body.address,
                    contactNumber: req.body.contactNumber,
                    reservedRooms: reservationSummary,
                    isNonUser: req.body.role == 'NON-USER' ? true : false,
                    isDownPayment: req.body.paymentType == 'Down Payment' ? true : false,
                    isPayAtHotel: req.body.paymentMode == 'Pay at The Hotel' ? true : false,
                    grandTotal: req.body.grandTotal,
                    discountType: req.body.discountType,
                    expirationDate: req.body.expirationDate,
                    amountPaid: req.body.amountPaid,

                    logo: "cid:logo",
                },
                attachments: [{
                    filename: 'logo.png',
                    path: './src/controlers/logo.png',
                    cid: 'logo'
                }]
            };
        }
        else if (req.body.reservationStatus == 'RESERVED') {

            const reservationSummary = await ReservationSummary.findAll(
                {
                    where: { reservation_id: req.body.reservationId },
                    include: { all: true, nested: true },
                }
            );
            console.log("reservationSummary", req.body)
            info = {
                from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
                to: req.body.email,
                subject: "Reservation Confirmed", // Subject line
                template: 'reservationConfirmed',
                context: {
                    firstName: req.body.firstName,
                    accountName: req.body.accountName,
                    accountNumber: req.body.accountNumber,
                    payment: req.body.payment,
                    reservationNumber: req.body.reservationNumber,
                    paymentType: req.body.paymentType,
                    lastName: req.body.lastName,
                    bankName: req.body.paymentMode == 'Pay at The Hotel' ? 'Gcash' : req.body.paymentMode,
                    reservationDate: req.body.reservationDate,
                    paymentMode: req.body.paymentMode,
                    birthDay: req.body.birthDay,
                    nationality: req.body.nationality,
                    emailAddress: req.body.emailAddress,
                    address: req.body.address,
                    contactNumber: req.body.contactNumber,
                    reservedRooms: reservationSummary,
                    isNonUser: req.body.role == 'NON-USER' ? true : false,
                    isDownPayment: req.body.paymentType == 'Down Payment' ? true : false,
                    grandTotal: req.body.grandTotal,
                    discountType: req.body.discountType,
                    expirationDate: req.body.expirationDate,
                    amountPaid: req.body.amountPaid,

                    logo: "cid:logo",
                },
                attachments: [{
                    filename: 'logo.png',
                    path: './src/controlers/logo.png',
                    cid: 'logo'
                }]
            };
        }
        else if (req.body.reservationStatus == 'proof declined') {

            const reservationSummary = await ReservationSummary.findAll(
                {
                    where: { reservation_id: req.body.reservationId },
                    include: { all: true, nested: true },
                }
            );
            console.log("reservationSummary", req.body)
            info = {
                from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
                to: req.body.email,
                subject: "Proof of payment declined!", // Subject line
                template: 'reservationProofDeclined',
                context: {
                    firstName: req.body.firstName,
                    accountName: req.body.accountName,
                    accountNumber: req.body.accountNumber,
                    payment: req.body.payment,
                    reservationNumber: req.body.reservationNumber,
                    bankName: req.body.paymentMode == 'Pay at The Hotel' ? 'Gcash' : req.body.paymentMode,
                    paymentType: req.body.paymentType,
                    lastName: req.body.lastName,
                    reservationDate: req.body.reservationDate,
                    paymentMode: req.body.paymentMode,
                    birthDay: req.body.birthDay,
                    nationality: req.body.nationality,
                    emailAddress: req.body.emailAddress,
                    address: req.body.address,
                    contactNumber: req.body.contactNumber,
                    reservedRooms: reservationSummary,
                    isNonUser: req.body.role == 'NON-USER' ? true : false,
                    isDownPayment: req.body.paymentType == 'Down Payment' ? true : false,
                    grandTotal: req.body.grandTotal,
                    discountType: req.body.discountType,
                    expirationDate: req.body.expirationDate,
                    amountPaid: req.body.amountPaid,

                    logo: "cid:logo",
                },
                attachments: [{
                    filename: 'logo.png',
                    path: './src/controlers/logo.png',
                    cid: 'logo'
                }]
            };
        }
        else if (req.body.reservationStatus == 'UNSETTLED') {

            const reservationSummary = await ReservationSummary.findAll(
                {
                    where: { reservation_id: req.body.reservationId },
                    include: { all: true, nested: true },
                }
            );
            console.log("reservationSummary", req.body)
            info = {
                from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
                to: req.body.email,
                subject: "Reservation Cancelled", // Subject line
                template: 'reservationCancelled',
                context: {
                    firstName: req.body.firstName,
                    accountName: req.body.accountName,
                    accountNumber: req.body.accountNumber,
                    payment: req.body.payment,
                    reservationNumber: req.body.reservationNumber,
                    bankName: req.body.paymentMode == 'Pay at The Hotel' ? 'Gcash' : req.body.paymentMode,
                    paymentType: req.body.paymentType,
                    lastName: req.body.lastName,
                    reservationDate: req.body.reservationDate,
                    paymentMode: req.body.paymentMode,
                    birthDay: req.body.birthDay,
                    nationality: req.body.nationality,
                    emailAddress: req.body.emailAddress,
                    address: req.body.address,
                    contactNumber: req.body.contactNumber,
                    reservedRooms: reservationSummary,
                    isNonUser: req.body.role == 'NON-USER' ? true : false,
                    isDownPayment: req.body.paymentType == 'Down Payment' ? true : false,
                    grandTotal: req.body.grandTotal,
                    discountType: req.body.discountType,
                    expirationDate: req.body.expirationDate,
                    amountPaid: req.body.amountPaid,

                    logo: "cid:logo",
                },
                attachments: [{
                    filename: 'logo.png',
                    path: './src/controlers/logo.png',
                    cid: 'logo'
                }]
            };
        }

        EmailAuto.transporter.sendMail(info);

        return res.status(200).send("mail sent");
    } catch (error) {
        return res.status(400).send(error.message);
    }



}


exports.resetPassword = async (req, res) => {
    try {

        let token = jwt.sign(
            { id: req.body.id },
            config.auth.secret,
            {
                expiresIn: 200,
            }
        );

        const url = 'https://rmluxehotel.com/newPassword/' + token;

        EmailAuto.transporter.use('compile', hbs({
            viewEngine: {
                extName: ".handlebars",
                parialsDir: path.resolve('./src/views'),
                defaultLayout: false,
            },
            viewPath: path.resolve('./src/views'),
            extName: ".handlebars",
        }));

        let info = {
            from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
            to: req.body.email,
            subject: "REQ: Password Reset", // Subject line
            template: 'resetPassword',
            context: {
                userName: req.body.userName,
                link: url,
                logo: "cid:logo",
            },
            attachments: [{
                filename: 'logo.png',
                path: './src/controlers/logo.png',
                cid: 'logo'
            }]
        };
        EmailAuto.transporter.sendMail(info);

        return res.status(200).send("mail sent");


    } catch (error) {

        return res.status(400).send(error.message);
    }
}

exports.findAll = async (req, res) => {
    const user = await User.findAll();
    return res.status(200).send(user);
};

exports.findOne = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    return res.status(200).send(user);
};

exports.update = async (req, res) => {
    try {
        let user = req.body;
        if (user.password != null) {
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
        }
        // console.log(user.password)
        await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("User updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("User deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.confirmEmail = async (req, res) => {
    try {
        await User.update({ emailVerified: true }, {
            where: {
                id: req.body.id,
            },
        });
        return res.status(200).send("Email verified successfully!");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};


exports.changePassword = async (req, res) => {
    try {

        let user_login;

        user_login = await User.findOne({
            where: {
                id: req.params.id
            },
        });

        let passwordIsValid = bcrypt.compareSync(req.body.oldPassword, user_login.password);
        if (!passwordIsValid) {
            return res.status(400).send({
                message: "Old password is incorrect."
            });
        }
        else{
            let user = req.body;
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
            await User.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            return res.status(200).send("User updated successfully");
        }


        
    } catch (error) {
        return res.status(400).send(error.message);
    }
};