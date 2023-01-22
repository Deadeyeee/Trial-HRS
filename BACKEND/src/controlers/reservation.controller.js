const { payment, paymentMode, guestInformation, user, discount, reservationSummary } = require("../models");
const db = require("../models");
const Reservation = db.reservation;
// import Logo from "../../../FRONTEND/src/images/logo.png";
const schedules = require('node-schedule')
const CronJob = require('cron').CronJob
const EmailAuto = require("../automatedEmail/EmailConfig")
const hbs = require('nodemailer-express-handlebars');
const path = require('path')

const numberFormat = (value) =>
    new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'PHP'
    }).format(value);

const fetchUsers = async () => {
    try {
        const reservation = await Reservation.findAll(
            {
                include: [
                    { model: payment, include: [{ model: paymentMode }, { model: discount }] },
                    { model: guestInformation, include: [user] },
                ]
            }
        );


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



        reservation.filter((item) => {
            if (Date.now() - Date.parse(new Date(item.dataValues.reservationDate)) >= 86400000 && item.dataValues.reservationStatus == 'PENDING') {
                return item
            }
        }).map(async (item) => {
            Reservation.update({
                reservationStatus: 'UNSETTLED'
            }, {
                where: {
                    id: item.dataValues.id,
                },
            })


            reservationSummary.update({
                bookingStatus: 'CANCELLED'
            }, {
                where: {
                    reservation_id: item.dataValues.id,
                },
            })

            payment.update({
                paymentStatus: 'cancelled'
            }, {
                where: {
                    id: item.dataValues.payment_id,
                },
            })




            let info;

            const reservationSummaryData = await reservationSummary.findAll(
                {
                    where: { reservation_id: item.dataValues.id },
                    include: { all: true, nested: true },
                }
            );

            console.log("reservationSummary", reservationSummaryData)
            info = {
                from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
                to: item.dataValues.guestInformation.dataValues.user.dataValues.email,
                subject: "Reservation Cancelled", // Subject line
                template: 'reservationCancelled',
                context: {
                    firstName: item.dataValues.guestInformation.dataValues.lastName,
                    accountName: item.dataValues.payment.dataValues.paymentMode.dataValues.accountName,
                    accountNumber: item.dataValues.payment.dataValues.paymentMode.dataValues.accountNumber,
                    reservationNumber: item.dataValues.reservationReferenceNumber,
                    paymentType: item.dataValues.payment.dataValues.paymentType,
                    lastName: item.dataValues.guestInformation.dataValues.lastName,
                    reservationDate: new Date(item.dataValues.reservationDate).toLocaleDateString() + " " + new Date(item.dataValues.reservationDate).toLocaleTimeString(),
                    paymentMode: item.dataValues.payment.dataValues.paymentMode.dataValues.paymentMode,
                    birthDay: item.dataValues.guestInformation.dataValues.birthDate,
                    nationality: item.dataValues.guestInformation.dataValues.nationality,
                    emailAddress: item.dataValues.guestInformation.dataValues.user.dataValues.email,
                    address: item.dataValues.guestInformation.dataValues.address,
                    contactNumber: item.dataValues.guestInformation.dataValues.user.dataValues.contactNumber,
                    reservedRooms: reservationSummaryData,
                    isNonUser: item.dataValues.guestInformation.dataValues.user.dataValues.role == 'NON-USER' ? true : false,
                    isDownPayment: item.dataValues.payment.dataValues.paymentType == 'Down Payment' ? true : false,
                    grandTotal: item.dataValues.payment.dataValues.grandTotal,
                    discountType: item.dataValues.payment.dataValues.discount.dataValues.discountType,
                    expirationDate: new Date(new Date(item.dataValues.reservationDate).getTime() + 60 * 60 * 24 * 1000).toLocaleDateString() + " " + new Date(item.dataValues.reservationDate).toLocaleTimeString(),
                    amountPaid: item.dataValues.payment.dataValues.paymentMade,

                    logo: "cid:logo",
                },
                attachments: [{
                    filename: 'logo.png',
                    path: './src/controlers/logo.png',
                    cid: 'logo'
                }]
            };
            EmailAuto.transporter.sendMail(info);
            console.log('MAIL SEND', info)
        })


        // const reservationSummaryData = await reservationSummary.findAll(
        //     {
        //         where: { reservation_id: '2c77e7de-2e48-487e-ad18-01204b566b36' },
        //         include: { all: true, nested: true },
        //     }
        // );
        // console.log(reservationSummaryData)
    } catch (error) {
        console.log('\n\n\n\n\n', error)

    }
}



const disableGuest = async () => {
    const users = await user.findAll({
        where: {
            role: 'NON-USER',
            status: true,
        }
    });
    console.log(users)


    users.map(async (userData) => {
        const reservationSummaryData = await reservationSummary.findAll(
            {
                include: { all: true, nested: true },
            }
        );

        if (
            reservationSummaryData
                .filter((item) => item.dataValues.reservation.dataValues.guestInformation.dataValues.user.dataValues.id == userData.dataValues.id)
                .sort((a, b) => Date.parse(new Date(b.dataValues.created_at)) - Date.parse(new Date(b.dataValues.created_at)))
                .map((item) => Date.parse(new Date(item.dataValues.checkOutDate).toLocaleDateString()) - Date.parse(new Date(new Date().toLocaleDateString())))
                .filter((obj, index) => index == 0).length != 0
        ) {
            console.log(reservationSummaryData
                .filter((item) => item.dataValues.reservation.dataValues.guestInformation.dataValues.user.dataValues.id == userData.dataValues.id)
                .sort((a, b) => Date.parse(new Date(b.dataValues.created_at)) - Date.parse(new Date(b.dataValues.created_at)))
                .map((item) => item.bookingReferenceNumber)
                .filter((obj, index) => index == 0)[0])


            if (
                reservationSummaryData
                    .filter((item) => item.dataValues.reservation.dataValues.guestInformation.dataValues.user.dataValues.id == userData.dataValues.id)
                    .sort((a, b) => Date.parse(new Date(b.dataValues.created_at)) - Date.parse(new Date(b.dataValues.created_at)))
                    .map((item) => Date.parse(new Date(item.dataValues.checkOutDate).toLocaleDateString()) - Date.parse(new Date(new Date().toLocaleDateString())))
                    .filter((obj, index) => index == 0)[0] < 0
            ) {
                user.update({
                    status: false,
                }, {
                    where: {
                        id: userData.id,
                    },
                });
            }
        }



    })

}


new CronJob('* 1 * * * *', () => {
    fetchUsers()
},
    null,
    true,
    'America/Los_Angeles'
)

// new CronJob('* 1 * * * *', () => {
//     disableGuest();
// },
//     null,
//     true,
//     'America/Los_Angeles'
// )



// schedules.scheduleJob('* 1 * * *', async () => {
//     fetchUsers()
//     // console.log('YAWA')
// })


exports.create = async (req, res) => {
    try {
        const new_reservation = await Reservation.create(req.body);
        return res.status(200).send({ new_reservation });
    } catch (error) {
        return res.status(200).send(error.message);
    }
};

exports.findAll = async (req, res) => {
    const reservation = await Reservation.findAll(
        {
            include: [
                { model: payment, include: [{ model: paymentMode }, { model: discount }] },
                { model: guestInformation, include: [user] },
            ]
        }
    );
    return res.status(200).send(reservation);
};

exports.findOne = async (req, res) => {
    const reservation = await Reservation.findByPk(req.params.id,
        {
            include: [
                { model: payment, include: [{ model: paymentMode }, { model: discount }] },
                { model: guestInformation, include: [user] },
            ]
        }
    );
    return res.status(200).send(reservation);
};

exports.update = async (req, res) => {
    try {
        await Reservation.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Reservation information updated successfully");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        await Reservation.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Reservation deleted successfully.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};