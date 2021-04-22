const router = require('express').Router();
const bcrypt = require('bcrypt');
//const passport = require('passport');
// const jwToken = require('jsonwebtoken');
// const jwtSecret = require('../config/keys').jwtSecret; 
const registerModel = require('../models/register');


router.post('/post', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

    const newUserData = new registerModel({
        firstName,
        lastName,
        username,
        password,
    });

    const crypted = await bcrypt.hash(newUserData.password, 10).then(cryptedPassword => {
        return cryptedPassword;
    }).catch(err => err);
    newUserData.password = crypted;
    newUserData.save()
    .then(() => res.json({message: "You have successfully registered"}))
    .catch(err => res.status(400).json('Reg Error' + err));

    
        // const payload = {
        //     user: {
        //         id: newUserData._id,
        //     }
        // };

        // jwToken.sign(
        //     payload,
        //     jwtSecret,
        //     {expiresIn: 5000},
        //     (err, token) => {
        //         if(err) throw err;
        //         const successMessage = {
        //             success: 'New User Created',
        //             token: token
        //         }

        //         res.json(successMessage)
                
        //     }
        // )
});

module.exports = router