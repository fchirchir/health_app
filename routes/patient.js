const express = require('express');

const router = express.Router();

const Patient = require ('../models/patients');
// const bcrypt  = require('bcrypt');

router.get('/', (req,res)=>{
    res.render ('patient/patient-create-consultation');

});

router.get('/patient-consutation-details', (req,res)=>{
    res.render ('patient/patient-consutation-details');

});

router.get('/patient-consultations', (req,res)=>{
    res.render ('patient/patient-consultations');

});

router.post('/patient-post-create-consultation',(req,res)=>{
  
    // bcrypt.hash(req.body.password, rounds, function(err,hash) {
    //   if(err){
    //     console.log(err);
    //   }else{
        let patient = new Patient({
          names: req.body.names,
          gender: req.body.speciality,
          dob: req.body.license_number,
          email: req.body.email,
          location: req.body.location,
          password: req.body.password
        }).save();
        res.redirect('/patient/patient-consultations');
    //   }
    // });
  
  });

module.exports = router;
