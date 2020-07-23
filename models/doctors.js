//require mongoose
const mongoose = require('mongoose');

//create a schema for db
const Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    name: String,
    email: String,
    password: String,
    license_number: Number,
    speciality: String,
    hospital: String
   });

//convert schema into a model
let Doctor = mongoose.model('Doctor',DoctorSchema);

module.exports = Doctor;