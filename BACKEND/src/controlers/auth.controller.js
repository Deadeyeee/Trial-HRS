const db = require("../models");
const User = db.users;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const config = require('../../config/auth.config');
const { Op } = require("sequelize");

exports.Login = async (req, res) => {
    try {
            const user_login = await User.findOne({
                where: {
                    [Op.or]: [
                        { email: req.body.email },
                        { userName: req.body.userName }
                    ],
                    emailVerified: true
                },
            });
    
            if (!user_login) {
                return res.status(400).send({ message: "Username/Email or Password is Incorrect." });
            }
            let passwordIsValid = bcrypt.compareSync(req.body.password, user_login.password);
            if (!passwordIsValid) {
                return res.status(400).send({
                    accessToken: null,
                    message: "Password is Incorrect."
                });
            }
    
            //our login secured authentication token
            let token = jwt.sign(
                { id: user_login.id, userName: user_login.userName, email: user_login.email, role: user_login.role },
                config.auth.secret,
                {
                    expiresIn: 43200,
                }
            );
    
            req.session.user = token;
            res.status(200).send({
                id: user_login.id,
                userName: user_login.userName,
                email: user_login.email,
                role: user_login.role,
                cookieSession: req.session.user,
            });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};


exports.verifyToken = async (req, res) => {

    if (req.session) {
        const token = req.session.user;
        try {
            let jwtPayLoad = jwt.verify(token, config.auth.secret);
            res.locals.user = jwtPayLoad;
            res.status(200).send(res.locals.user);
        } catch (error) {
            res.status(401).send("Unauthorized");
            res.locals.user = null;
            return;
        }
    }
};


exports.Logout = async (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.send("successfully logedout");
    }
}