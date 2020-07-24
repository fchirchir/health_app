const express = require('express');

const router = express.Router();

// const patient = require ('../models/patients')

router.get('/', (req,res)=>{
    res.render ('patient/patient');

});

module.exports = router;
