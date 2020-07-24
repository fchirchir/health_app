const express = require('express');

const router = express.Router();
const Doctor = require('../models/doctors');
const Patient = require('../models/patients');
const Consultation = require('../models/consultations');
 
//doctor routes
  router.get('/',(req,res)=>{ 
    res.render('doctor/doctor-profile'); 
 });

  
  router.get('/doctor-view-consultation',(req,res)=>{
        //search consultations
  Consultation.find({}, (err, consultations)=>{
    if(err){
       console.log(err);
    }else{
       res.render('doctor/doctor-view-consultation', {consultations:consultations});
    }
  });
  });

  router.get('/doctor-consultation',(req,res)=>{
    //search patients
  Patient.find({}, (err, patients)=>{
    if(err){
       console.log(err);
    }else{
       res.render('doctor/doctor-consultations', {patients:patients});
    }
  });
  });


module.exports = router;