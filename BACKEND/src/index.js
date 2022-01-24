const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'jhim',
    password: 'jhim',
    database: 'rm_luxe_hotel_db',
});

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
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

app.post('/login', (req,res) =>{
    
    const password = req.body.password;
    const username = req.body.username;

    const findAccount = "select * from useraccounts where username = ? and password = ?"
    db.query(findAccount, [username, password], (err, result) => {
        if(err){
            res.send({err: err});
        }

        if(result.length > 0){
            
            req.session.user = result;
            res.send(result);
        }
        else{
            res.send({message: "Incorrect password or username"})
        }
    });

});


app.post('/logout', (req, res) =>{
        req.session.destroy(); 
        res.send("succesfully Loged out!")
});


app.get('/login', (req, res) =>{
    if(req.session.user){
        res.send(req.session.user[0].username)
    }
    else{
        res.send("not loged")
    }
})


app.delete('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.send("successfully logedout");
        
      }
});

app.listen(3001, () =>{
    console.log("running on port 3001");
});
