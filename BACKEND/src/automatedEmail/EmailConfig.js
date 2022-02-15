const nodemailer = require("nodemailer");
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    auth: {
      user: 'Rm.LuxeHotel@gmail.com',
      pass: '2qa[gBd6u(BWUK?d',
    },
  });


  exports.handleBar = {
      viewEngine:{
        extName: ".handlebars",
        parialsDir: path.resolve('./views'),
        defaultLayout: false,
      },
      viewPath: path.resolve('./views'),
      extName: ".handlebars",
  }