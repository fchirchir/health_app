const express = require('express');

const router = express.Router();

const Patient = require ('../models/patients');
// const bcrypt  = require('bcrypt');

router.get('/login', (req,res)=>{
    res.render ('patient/patient-login');

});



module.exports = router;
