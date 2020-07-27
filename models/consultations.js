const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
	patient_number: {type: String, required: true},
	doctor_number: {type: String, required: true},
	patient_attachments: String,
	visitation_notes: String,
	assigned_doctor: String,
	diagnosis: String,
	prescription: String,
	doctor_attachments: String
},{timestamps: true});

module.exports = mongoose.model('Consultation',consultationSchema);
