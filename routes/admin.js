const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();
const User    = require('../models/users');
const Doctor  = require('../models/doctors');
const Patient = require('../models/patients');

const rounds  = 12;

/******************
  
  ADMIN DASHBOARD

***********************/

router.get('/',(req,res)=>{
  //patients
  //doctors
  res.send("Doctors Found");
});

/********************
  
  Register Doctor

****************************/

router.post('/doctor/register',(req,res)=>{
  bcrypt.hash(req.body.password, rounds, function(err,hash) {
    if(err){
      console.log(err);
    }else{
      let doctor = new Doctor({
        names: req.body.names,
        speciality: req.body.speciality,
        license_number: req.body.license_number,
        hospital: req.body.hospital,
        email: req.body.email,
        password: hash
      }).save();
    }
  });

});

module.exports = router;