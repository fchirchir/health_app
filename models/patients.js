const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
	names: String,
	dob: Date,
	gender: String,
	email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
	password: String,
	location: String,
},{timestamps: true});

module.exports = mongoose.model('Patient',patientSchema);