const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path')
const schedules = require('node-schedule')
const controller  = require('./controlers/user.controller.js');

const auth2 = require('../config/auth.config')
//import routes here

//create routes
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    key: "user",
    secret: auth2.auth.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        // secure: true, 
        // httpOnly: false,
        // sameSite: 'none',
        expire: 5 * 3600000,
    },
}))

let serverDatestarted = new Date();
//test server
app.get('/', (req, res) =>{
    res.send(req.cookies.cookieName);
    // res.cookie('shabu', 'eyyy')
    console.log(req.cookies.cookieName != null)
    // console.log(req.cookies)
});
//test server
app.get('/setCookie', (req, res) =>{
    // res.send(serverDatestarted);
    
    res.cookie('cookieName', 'cookieValue').send('cookie set');
    // console.log('success')
});
const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log("running on port 3001");
});



//init routers
const user = require('./routes/user.route.js');
const auth = require('./routes/auth.route.js');
const guest = require('./routes/guestInformation.route.js');
const roomType = require('./routes/roomType.route.js');
const amenities = require('./routes/amenities.route.js');
const discount = require('./routes/discount.route.js');
const paymentMode = require('./routes/paymentMode.route.js');
const reservation = require('./routes/reservation.route.js');
const room = require('./routes/room.route.js');
const reservationSummary = require('./routes/reservationSummary.route.js');
const orderedAmenities = require('./routes/orderedAmenities.route.js');
const payment = require('./routes/payment.route.js');
const services = require('./routes/services.route.js');
const usedServices = require('./routes/usedServices.route.js');
const roomTypeImages = require('./routes/roomTypeImages.route.js');
const message = require('./routes/message.route.js');
const conversation = require('./routes/conversation.route.js');
const deleteConversation = require('./routes/deleteConversation.route.js');
const receipt = require('./routes/receipt.route.js');



//use Routes
app.use('/api', user);
app.use('/auth', auth);
app.use('/api', guest);
app.use('/api', roomType);
app.use('/api', amenities);
app.use('/api', discount);
app.use('/api', paymentMode);
app.use('/api', reservation);
app.use('/api', room);
app.use('/api', reservationSummary);
app.use('/api', orderedAmenities);
app.use('/api', payment);
app.use('/api', services);
app.use('/api', usedServices);
app.use('/api', roomTypeImages);
app.use('/api', message);
app.use('/api', conversation);
app.use('/api', deleteConversation);
app.use('/api', receipt);


//static image 
app.use('/src/Images/Rooms',express.static('src/Images/Rooms'))
app.use('/src/Images/PaymentReciept',express.static('src/Images/PaymentReciept'))





//SCHEDULE CANCELATION OF BOOKING 


// schedules.scheduleJob('*/2 * * * * *', async ()=>{
//     const result = await controller.findAll;
//     console.log(result)
// })