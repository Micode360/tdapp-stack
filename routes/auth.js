const router = require('express').Router();
const registerData = require('../models/register');


router.post('/post', (req,res)=>{
    console.log(req.body)
})


module.exports = router