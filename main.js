//import express package
const express = require('express');
const path = require('path');

let doctorRouter = require('./routes/doctor');

//initialize express
const app = express();

//setup a view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));

//set a static folder
app.use(express.static('public'));

//route for doctor page

app.use('/doctor/:username',doctorRouter);

// Define the port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});
