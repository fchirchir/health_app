const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for our database
const patientSchema = new Schema({
	names: String,
	gender: String,
	dob: Date,
	email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
	password: String,
	location: String,
},{timestamps: true});

// convert the schema into a Model
let Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient 