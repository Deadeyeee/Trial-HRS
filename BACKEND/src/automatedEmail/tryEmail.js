
const hbs = require('nodemailer-express-handlebars');
const path = require('path')
const EmailAuto = require("../automatedEmail/EmailConfig")

EmailAuto.transporter.use('compile', hbs({
    viewEngine:{
        extName: ".handlebars",
        parialsDir: path.resolve('../views'),
        defaultLayout: false,
      },
      viewPath: path.resolve('../views'),
      extName: ".handlebars",
}));

let info = {
    from: '"RM Luxe Hotel" "<Rm.LuxeHotel@gmail.com>"', // sender address
    to: "jhimwel8111@gmail.com",
    subject: "Email Confirmation", // Subject line
    template: 'email',
    context: {
        userName: "jhimwel",
        link: "link",
        logo: "cid:logo",
    },
    attachments: [{
        filename: 'logo.png',
        path: '../controlers/logo.png',
        cid: 'logo' }]
};

EmailAuto.transporter.sendMail(info);