const express = require('express');

const router = express.Router();
const Doctor = require('../models/doctors');


router.get('/',(req,res)=>{
    res.render('doctor/doctor-consultations');
  });
  
  router.get('/doctor-view-consultation',(req,res)=>{
    res.render('doctor/doctor-view-consultation');
  });

module.exports = router;