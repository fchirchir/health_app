const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
	patient_number: {type: String, required: true},
	doctor_number: {type: String, required: true},
	attachments_path: String,
	visitation_notes: String,
},{timestamps: true});

module.exports = mongoose.model('Consultation',consultationSchema);