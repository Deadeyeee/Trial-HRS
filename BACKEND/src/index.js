const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path')
const schedules = require('node-schedule')
const controller  = require('./controlers/user.controller.js');

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
    secret: "example",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expire: 5 * 3600000,
    },
}))


//test server
app.get('/', (req, res) =>{
    res.send('hELLO WORLD');
    console.log(typeof(firstname))
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


//static image 
app.use('/src/Images/Rooms',express.static('src/Images/Rooms'))
app.use('/src/Images/PaymentReciept',express.static('src/Images/PaymentReciept'))





//SCHEDULE CANCELATION OF BOOKING 


// schedules.scheduleJob('*/2 * * * * *', async ()=>{
//     const result = await controller.findAll;
//     console.log(result)
// })