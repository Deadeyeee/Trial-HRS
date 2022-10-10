const db = require("../models");
const EmailAuto = require("../automatedEmail/EmailConfig")
const User = db.user;
const hbs = require('nodemailer-express-handlebars');
const config = require('../../config/auth.config');
const jwt = require('jsonwebtoken');
const path = require('path')
const bcrypt = require('bcrypt');
// import Logo from "../../../FRONTEND/src/images/logo.png";

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


exports.resendEmail = async(req, res) =>{
    try {
        
        let token = jwt.sign(
            { id: req.body.id },
            config.auth.secret,
            {
                expiresIn: 200,
            }
        );
            const url = 'http://localhost:3000/registered/' + token;

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



exports.resetPassword = async(req, res) =>{
    try {
        
        let token = jwt.sign(
            { id: req.body.id },
            config.auth.secret,
            {
                expiresIn: 200,
            }
        );
            const url = 'http://localhost:3000/newPassword/' + token;

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
        let user = req.body;
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
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