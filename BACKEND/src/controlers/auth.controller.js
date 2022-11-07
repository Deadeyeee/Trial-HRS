const db = require("../models");
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const config = require('../../config/auth.config');
const { Op } = require("sequelize");

exports.Login = async (req, res) => {
    try {
        let user_login;

        user_login = await User.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { userName: req.body.userName }
                ],

                role: 'CUSTOMER',
                status: true,
            },
        });

        if (!user_login) {

            user_login = await User.findOne({
                where: {
                    [Op.or]: [
                        { email: req.body.email },
                        { userName: req.body.userName }
                    ],

                    role: 'NON-USER',
                    status: true,
                },
            });
            //nonuser

            if (!user_login) {
                return res.status(400).send({ message: "Username/Email or Password is Incorrect." });
            }
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, user_login.password);

        if (!passwordIsValid) {
            user_login = await User.findOne({
                where: {
                    [Op.or]: [
                        { email: req.body.email },
                        { userName: req.body.userName }
                    ],
                    role: 'NON-USER',
                    status: true,
                },
            });
            if (!user_login) {
                passwordIsValid == false;
            }
            else {
                passwordIsValid = bcrypt.compareSync(req.body.password, user_login.password);
            }

            if (!passwordIsValid) {
                return res.status(400).send({
                    accessToken: null,
                    message: "Password is Incorrect."
                });
            }

        }
        //our login secured authentication token
        if (user_login.emailVerified === true || user_login.emailVerified === false) {
            let token = jwt.sign(
                { id: user_login.id, userName: user_login.userName, email: user_login.email, role: user_login.role },
                config.auth.secret,
                {
                    // expiresIn: '365d',
                }
            );

            req.session.user = token;
            res.cookie('accessToken', token)
            res.status(200).send({
                id: user_login.id,
                userName: user_login.userName,
                email: user_login.email,
                role: user_login.role,
                cookieSession: req.session.user,
            });

        }
        else {
            res.status(400).send({ message: "Please verify your email address." })
        }

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};







exports.LoginAdmin = async (req, res) => {
    try {
        let user_login;

        user_login = await User.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { userName: req.body.userName }
                ],

                role: { [Op.or]: ['ADMIN', 'STAFF'] },
                status: true,
                // [Op.or]: [
                //     { role: 'ADMIN' },
                //     { role: 'STAFF' },
                // ],
            },
        });

        if (!user_login) {
            return res.status(400).send({ message: "Username/Email or Password is Incorrect." });

        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user_login.password);
        console.log(user_login)
        if (!passwordIsValid) {
            return res.status(400).send({
                accessToken: null,
                message: "Password is Incorrect."
            });
        }


        //our login secured authentication token
        if (user_login.emailVerified === true || user_login.emailVerified === false) {
            let token = jwt.sign(
                { id: user_login.id, userName: user_login.userName, email: user_login.email, role: user_login.role },
                config.auth.secret,
                {
                    // expiresIn: '365d',
                }
            );

            req.session.user = token;
            res.cookie('accessToken', token)

            res.status(200).send({
                id: user_login.id,
                userName: user_login.userName,
                email: user_login.email,
                role: user_login.role,
                cookieSession: req.session.user,
            });
        }
        else {
            res.status(400).send({ message: "Please verify your email address." })
        }

    } catch (error) {
        res.status(500).send({ message: error.message });
    }

};




exports.verifyToken = async (req, res) => {

    if (req.cookies.accessToken != null) {
        const token = req.cookies.accessToken;
        try {
            let jwtPayLoad = jwt.verify(token, config.auth.secret);

            res.locals.user = jwtPayLoad;

            res.status(200).send(res.locals.user);
        } catch (error) {
            res.status(401).send(error);
            res.locals.user = null;
            return;
        }
    }
    else{
        res.status(401).send('unauthorized');
            res.locals.user = null;
            return;
    }
};

// exports.refreshToken = async (req, res) => {

//     if (req.session) {
//         const token = req.session.user;
//         try {
//             let jwtPayLoad = jwt.verify(token, config.auth.secret);
//             res.locals.user = jwtPayLoad;
//             res.status(200).send(res.locals.user);
//         } catch (error) {
//             res.status(401).send(error);
//             res.locals.user = null;
//             return;
//         }
//     }
// };


exports.verifyEmailToken = async (req, res) => {

    const token = req.params.id;
    try {
        let jwtPayLoad = jwt.verify(token, config.auth.secret);
        res.locals.user = jwtPayLoad;
        res.status(200).send(res.locals.user);
    } catch (error) {
        res.status(401).send("Unauthorized");
        res.locals.user = null;
        return;
    }

};



exports.Logout = async (req, res) => {
    // req.session.destroy();
    try {
        await delete req.session.user;
        await res.clearCookie("accessToken");
        res.status(200).send("successfully logedout");
    } catch (error) {
        res.status(401).send("You are not loged in");
    }
}