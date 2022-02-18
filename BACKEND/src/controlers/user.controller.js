const db = require("../models");
const EmailAuto = require("../automatedEmail/EmailConfig")
const User = db.user;
const hbs = require('nodemailer-express-handlebars');
const path = require('path')
// import Logo from "../../../FRONTEND/src/images/logo.png";

exports.create = async (req, res) => {
    try {
        const new_user = await User.create(req.body);
        const url = 'http://localhost:3000/registered/' + new_user.id;


        EmailAuto.transporter.use('compile', hbs({
            viewEngine:{
                extName: ".handlebars",
                parialsDir: path.resolve('./src/views'),
                defaultLayout: false,
              },
              viewPath: path.resolve('./src/views'),
              extName: ".handlebars",
        }));

        let info = {
            from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
            to: new_user.email,
            subject: "Email Confirmation", // Subject line
            template: 'email',
            context: {
                userName: new_user.userName,
                link: url,
                logo: "cid:logo",
            },
            attachments: [{
                filename: 'logo.png',
                path: './src/controlers/logo.png',
                cid: 'logo' }]
        };
        EmailAuto.transporter.sendMail(info);

        req.session.register = new_user;

        return res.status(200).send({
            account: new_user,
            email: "Email Sent: " + info.messageId,
        });
    } catch (error) {
        return res.status(400).send(error.message);

    }
};


exports.resendEmail = async(req, res) =>{
    try {
        
            const url = 'http://localhost:3000/registered/' + req.body.id;

            EmailAuto.transporter.use('compile', hbs({
                viewEngine:{
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
                    cid: 'logo' }]
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
    console.log("scammer")
    try {
        await User.update({ emailVerified: true }, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Email verified successfully!");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};