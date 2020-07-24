<<<<<<< HEAD
// Import express framework
const express = require('express');

let patientRouter = require('./routes/patient');
const mongoose = require('mongoose');

//DB Creds
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };
=======
//Imports
const express = require('express');
const mongoose  = require('mongoose');
const bodyParser= require('body-parser');
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
>>>>>>> c5ce53762ed3da553101aac853c9faf6d8d0aad8

// Connecting to the Database
let mongodb_url = 'mongodb://localhost/';
let dbName = 'healthApp';
<<<<<<< HEAD

// Define a url to connect to the database
const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName
mongoose.connect(MONGODB_URI,options);
let db = mongoose.connection;


// Check for Database Errors
db.once ('open', ()=>{
    console.log ('Connection is Successful');
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})

// Initialize express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// route for the Patient page
    app.use('/patient',patientRouter);

 
// Define the port number
const PORT = 5000;

app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})
=======
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
app.use(express.static('public'));
// body parser middleware
app.use(express.json());
// App Routing
app.use('/admin', adminRouter);
// Doctor Routing
app.use('/doctor', doctorRouter);
//Server PORT
const PORT = process.env.PORT || 5000;
//Start Server
app.listen(PORT, function(){
	console.log(`Server is listening on port ${PORT}`);
});
>>>>>>> c5ce53762ed3da553101aac853c9faf6d8d0aad8
