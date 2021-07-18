const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwToken = require('jsonwebtoken');
const jwtSecret = require('../config/keys').jwtSecret; 
const registerModel = require('../models/register');



router.post('/signUp', async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

      const existingUsername = await registerModel.findOne({username}).select("-password");

        if(existingUsername) {
            res.status(401).json('Username has been taken')
            return;
        }

        if(password.length < 6) {
            res.status(401).json('Password must be more than 6 characters')
            return;
        }

        if(password !== confirmPassword){
            res.status(401).json('password doesnt match');
            return;
        }


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
});


router.post('/signIn', async (req, res) => {

    passport.authenticate('local',
    {
        successRedirect: '/',
        failureFlash: true
    }, (err, user) => {
        if (err){
            res.status(401).res.json({error: err})
            return;
        } 
       if (!user) return res.status(401).json("Check your email or password");
        if(req.body.password.length < 6) {
            res.status(401).json('Password must be more than 6 characters')
            return;
        }
        else {
                    jwToken.sign({
                user: {
                    id: user._id
                }
            },
                jwtSecret,
                {expiresIn: '1d'},
                (err, token) => {
                    if(err) throw err;
                    res.send({
                        success: 'token success',
                        token: token
                    });
                }
            )
        }
    })(req, res);

})





module.exports = router