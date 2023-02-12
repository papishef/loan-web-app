//jshint esversion:6
require('dotenv').config()
const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser')
const User = require('./models/user');
const { isAuthenticated } = require('./utils/validator.js')



const MongoDBStore = require('connect-mongodb-session')(session);
const sessionStore = new MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: 'sessions',
});

app.use(cors())
///Allow requests from client to be accessible via req.body
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// app.use(express.static('public'));

////SETTING MULTER FILE STORAGE SYSTEM//////////
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/uploads/'));
    },
    filename: (req, file, cb) => {
        cb(null, req.body.firstName + '-' + req.body.lastName + '-' + file.originalname);
    }
});


//Setup multer middleware
const upload = multer({ storage: fileStorage })


////////////port definition/////////////
let port = process.env.PORT;
if (port == undefined || port == "") {
    port = process.env.PORT;
}


//To allow our express serveer render local files including css and javascript
app.use(cookieParser());
app.use(express.static('public'));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
        maxAge: 600000
    }
}));


app.post("/register", upload.single('idFile'), (req, res, next) => {
    const body = req.body
    console.log(req.file);

    const user = new User({
        email: body.email, 
        password: body.password, 
        firstName: body.firstName, 
        lastName: body.lastName, 
        otherNames: body.otherNames, 
        mobileNumber: body.mobileNumber, 
        countryName: body.countryName, 
        dob: body.dob, 
        address: body.address, 
        loanType: body.loanType, 
        loanPurpose: body.loanPurpose, 
        idType: body.idType, 
        idFile: req.file.filename, 
        activated: body.activated
    }) 

    user.save()
    .then(result => {
        res.status(201).json(result.data)
    })
    .catch(error => {
        console.log(error);
        next(error)
    })
})


app.post("/login", (req, res) => {
    console.log(req.body)
    res.status(200)
})

app.post("/apply", isAuthenticated, (req, res) => {
    console.log(req.body)
    res.status(201)
})

app.post("/edit-profile", isAuthenticated, (req, res) => {
    console.log(req.body)
    res.status(201)
})


////////404/////////
app.use((req, res, next) => {
    res.status(400).json({
        error: "Not found"
    })
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status()
});


// Database Connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port} and Mongoose connected to DB successfully`);
        });
    })
    .catch(err => {
        console.log(err);
    });