const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();
const User    = require('../models/users');
const Doctor  = require('../models/doctors');
const Patient = require('../models/patients');

const rounds  = 12;

const { body,validationResult,sanitizeBody } = require('express-validator');

/******************
  
  ADMIN DASHBOARD

***********************/

router.get('/',(req,res)=>{
  res.render('admin/admin-panel');
});

/********************
  
  DOCTOR ROUTES

****************************/

router.get('/admin-doctors',(req,res)=>{

  Doctor.find({}, (error, doctors)=>{
       if(error){
          console.log(error);
       }else{
          res.render('admin/admin-doctors', { doctors:doctors});
       }
   });

});

router.get('/admin-create-doctor',(req,res)=>{
  res.render('admin/admin-create-doctor');
});

router.post('/admin-doctor/register',(req,res)=>{
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
      res.redirect('/admin/admin-doctors');
    }
  });

});

router.get('/admin-doctor-details/:id',(req,res)=>{
  res.render('admin/admin-doctor-details');
});

/********************
  
  PATIENT ROUTES

****************************/
router.get('/admin-patients',(req,res)=>{
  res.render('admin/admin-patients');
});

router.get('/admin-patient-details/:id',(req,res)=>{
  res.render('admin/admin-patient-details');
});

module.exports = router;