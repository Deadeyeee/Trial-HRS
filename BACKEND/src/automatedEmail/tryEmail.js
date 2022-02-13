
const EmailAuto = require("../automatedEmail/EmailConfig")

let info = await EmailAuto.transporter.sendMail({
    from: '"Manyak" "<Rm.LuxeHotel@gmail.com>"', // sender address
    to: "jhimwel8111@gmail.com",
    subject: "Email Confirmation", // Subject line
    text: "Please click the link below to confirm your email", // plain text body
    html: "", // html body
    attachments: [{
        filename: 'logo.png',
        path: 'src/controlers/logo.png',
        cid: 'logo' }]
    });