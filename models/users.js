const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
	names: String,
	email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
	password: String,
},{timestamps: true});

module.exports = mongoose.model('User',adminSchema);