const express = require('express');

const router = express.Router();

// const patient = require ('../models/patient')

router.get('/', (req,res)=>{
    res.render ('patient');

});

module.exports = router;
