const express = require('express');

const router = express.Router();

const Patient = require ('../models/patients');
// const bcrypt  = require('bcrypt');

router.get('/', (req,res)=>{
    res.render ('patient/patient-login');

});

router.get('/patient-register', (req,res)=>{
    res.render ('patient/patient-register');

});

router.get('/patient-dash', (req,res)=>{
    res.render ('patient/patient-dashboard');

});

router.post('/patient-post-register',(req,res)=>{
  
    bcrypt.hash(req.body.password, rounds, function(err,hash) {
      if(err){
        console.log(err);
      }else{
        let patient = new Patient({
          names: req.body.names,
          gender: req.body.gender,
          dob: req.body.dob,
          email: req.body.email,
          location: req.body.location,
          password: req.body.password
        }).save();
        res.redirect('/patient/patient-login');
      }
    });
  
  });

module.exports = router;
