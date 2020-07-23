const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
	names: String,
	speciality: String,
	license_number: String,
	hospital: String,
	email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
	password: String,
},{timestamps: true});

module.exports = mongoose.model('Doctor',doctorSchema);