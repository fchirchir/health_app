const express = require('express');
const bcrypt  = require('bcrypt');
const router  = express.Router();
const User    = require('../models/users');
const Doctor  = require('../models/doctors');
const Patient = require('../models/patients');
const Consultation = require('../models/consultations');

const rounds  = 12;

const { body,check, validationResult, matchedData,sanitizeBody } = require('express-validator');

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
   }).sort({'createdAt': -1});

});

router.get('/admin-create-doctor',(req,res)=>{
  res.render('admin/admin-create-doctor',{ data: {}, errors: {} });
});

router.post('/admin-doctor/register',[
    check("names")
      .isLength({ min: 1 })
      .withMessage("Names is required")
      .trim(),
    check("license_number")
      .isLength({ min: 1 })
      .withMessage("License Number is required")
      .trim(),
    check("hospital")
      .isLength({ min: 1 })
      .withMessage("Hospital is required")
      .trim(),
    check("speciality")
      .isLength({ min: 1 })
      .withMessage("Speciality is required")
      .trim(),
    check("password")
      .isLength({ min: 1 })
      .withMessage("Password is required")
      .trim(),
    check("email")
      .isEmail()
      .withMessage("Provide a valid email address")
      .bail()
      .trim()
      .normalizeEmail()
  ],(req,res)=>{
  
  bcrypt.hash(req.body.password, rounds, function(err,hash){
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.render("admin/admin-create-doctor", {
        data: req.body,
        errors: errors.mapped()
      });
    }else{
      let doctor = new Doctor({
        names: req.body.names,
        speciality: req.body.speciality,
        license_number: req.body.license_number,
        hospital: req.body.hospital,
        email: req.body.email,
        password: hash
      }).save();
      req.flash("success", "Doctor successfully registered.");
      res.redirect('/admin/admin-doctors');
    }
  });

});

router.get('/admin-doctor-details/:id', async (req,res)=>{

  const dashboardData = {
    patientsCount: await Consultation.distinct("patient_number",{doctor_number: req.params.id}).countDocuments(),
    prescriptionsCount: await Consultation.countDocuments({doctor_number: req.params.id}),
  };

  Doctor.findById(req.params.id, (error, doctor)=>{
     if(error){
        console.log(error)
     }else{
       const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
       res.render('admin/admin-doctor-details', {doctor:doctor, months: months,
        patients: dashboardData.patientsCount, prescriptions: dashboardData.prescriptionsCount});
     }
   });

});

/********************
  
  PATIENT ROUTES

****************************/
router.get('/admin-patients',(req,res)=>{

  Patient.find({},(error,patients)=>{
     if(error){
        console.log(error);
     }else{
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        res.render('admin/admin-patients', { patients: patients, months: months});
     }
   }).sort({'createdAt': -1});

});

module.exports = router;