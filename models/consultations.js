const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
	names: String,
    speciality: String,
    diagnosis: String,
    prescription: String,
    attachments: String,
	},{timestamps: true});

module.exports = mongoose.model('Consultation',consultationSchema);