//Imports
const path = require("path");
const express = require('express');
const mongoose  = require('mongoose');
const bodyParser= require('body-parser');
const session = require("express-session");
const flash = require("express-flash");
//Routes
let adminRouter = require('./routes/admin');
let patientRouter = require('./routes/patient');
let doctorRouter = require('./routes/doctor');
// Initialize Express
const app  = express();
app.use(bodyParser.urlencoded({ extended: true }));
//DB Creds
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

// Connecting to the Database
let mongodb_url = 'mongodb://localhost/';
let dbName = 'healthApp';
// Define a url to connect to the database
const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName;
mongoose.connect(MONGODB_URI, options);
let db = mongoose.connection;

db.once('open',()=>{
	console.log("Database connected successfully.");
});

db.on('error',(error)=>{
	console.log(error);
});

//Set View Engine
app.set('view engine','ejs');
//Set Static folder
const middlewares = [
  express.static(path.join(__dirname, "public")),
  express.json(),
  bodyParser.urlencoded({ extended: true }),
  session({
    secret: "super-secret-key",
    key: "super-secret-cookie",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }),
  flash()
];

app.use(middlewares);
// App Routing
app.use('/admin', adminRouter);
// Doctor Routing
app.use('/doctor', doctorRouter);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
//Server PORT
const PORT = process.env.PORT || 5000;
//Start Server
app.listen(PORT, function(){
	console.log(`Server is listening on port ${PORT}`);
});