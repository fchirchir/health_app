const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for our database
var PatientSchema = new Schema({
    name: String,
    dateOfBirth: Date,
    email: String,
    password: String,
    location: String,

    timeStamp: {type: Date, default: Date() }

});

// convert the schema into a Model
let Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;