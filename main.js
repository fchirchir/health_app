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

// Connecting to the Database
let mongodb_url = 'mongodb://localhost/';
let dbName = 'healthApp';

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
