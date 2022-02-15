const db = require("../models");
const EmailAuto = require("../automatedEmail/EmailConfig")
const User = db.user;
// import Logo from "../../../FRONTEND/src/images/logo.png";

exports.create = async (req, res) => {
    try {
        const new_user = await User.create(req.body);
        const url = 'http://localhost:3000/registered/' + new_user.id;
        

        let info = await EmailAuto.transporter.sendMail({
        from: '"Manyak" "<Rm.LuxeHotel@gmail.com>"', // sender address
        to: "jhimwel8111@gmail.com",
        subject: "Email Confirmation", // Subject line
        text: "Please click the link below to confirm your email", // plain text body
        html: "<div style=\"justify-content: center;flex-direction: column; display: flex; align-items: center; width: 400px; height: auto; background-color: #2E2E2E; border-radius: 5px; padding: 25px; margin: 50px; box-shadow: 5px 10px 5px black\"><img style=\"height: 200px; width: 200px;\" src=\"cid:logo\"><br><br><p style=\"color: #E1DACA; text-align: center;\">Hi <b>"+new_user.userName+"</b>,<br><br><br>We just need to <b>verify your email address</b> before you can access your account.<br><br>Verify your email address by <b>clicking the button bellow.</b><br><br><a style=\"cursor: pointer;\" href=\""+url+"\"><button style=\"padding: 15px 90px; background-color: #8F805F\">Verify!</button></a><br><br><br><br>Thanks! &#8211; <i>The Rm Luxe Hotel team</i></p></div>", // html body
        attachments: [{
            filename: 'logo.png',
            path: 'src/controlers/logo.png',
            cid: 'logo' }]
        });
        return res.status(200).send({
            account: new_user,
            email: "Email Sent: " + info.messageId,
        });
    } catch (error) {
        return res.status(200).send(error.message);

    }
};

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
        await User.update({emailVerified: true}, {
            where: {
                id: req.params.id,
            },
        });
        return res.status(200).send("Email verified successfully!");
    } catch (error) {
        return res.status(400).send(error.message);
    }
};