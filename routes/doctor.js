const express = require('express');

const router = express.Router();
const Doctor = require('../models/doctors');


router.get('/:username', (req,res)=>{
    res.render('doctor');
});

module.exports = router; 