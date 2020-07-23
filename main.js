//import express package
const express = require('express');

let doctorRouter = require('./routes/doctor');
const mongoose = require('mongoose');

const options = {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

//connect to database
let mongodb_url = 'mongodb://localhost';
let dbName = 'healthApp';
mongoose.connect(mongodb_url + dbName, options);
let db = mongoose.connection;

//check connection
db.once('open', ()=>{
    console.log('Database connected successfully');
})

//check for db errors

db.on('error', (error)=>{
    console.log(error);
})

//initialize express
const app = express();

//setup a view engine
app.set('view engine', 'ejs');

//set a static folder
app.use(express.static('public'));

// body parser middleware
app.use(express.json())

//route for doctor 
app.use('/doctor',doctorRouter);

// Define the port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});
