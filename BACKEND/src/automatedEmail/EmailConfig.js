const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    auth: {
      user: 'Rm.LuxeHotel@gmail.com',
      pass: 'niiiphggimclzfax',
    },
  });

