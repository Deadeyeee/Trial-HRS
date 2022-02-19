const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const server = app.listen(3001)
const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:3000'],
    },   
});

// websockets
let socketId;

io.on("connection", socket => {
   
})

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/', (req, res) => {
    res.send('hELLO WORLD');
    console.log(typeof (firstname))
});



//init routers
const user = require('./routes/user.route.js');
const auth = require('./routes/auth.route.js');
const guest = require('./routes/guestInformation.route.js');
const { Socket } = require('socket.io');



//use Routes
app.use('/api', user);
app.use('/auth', auth);
app.use('/api', guest);

