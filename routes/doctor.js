const express = require('express');

const router = express.Router();
const Doctor = require('../models/doctors');
const Patient = require('../models/patients');

 
//doctor routes
  router.get('/',(req,res)=>{ 
    res.render('doctor/doctor-profile'); 
 });

  
  router.post('/doctor-view-consultation',(req,res)=>{
      res.render('doctor/doctor-view-consultation');
  });

  router.get('/doctor-consultation',(req,res)=>{
    //find patients
  Patient.find({}, (error, patients)=>{
    if(error){
       console.log(error);
    }else{
       res.render('doctor/doctor-consultations', {patients:patients});
    }
  }).sort({'createdAt': -1});
  });


module.exports = router;