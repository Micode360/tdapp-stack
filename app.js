const express = require('express');
const app = express();
const cors = require('cors')
const mainBase = require('./config/db');
const passport = require('passport');
const passportAuth = require('./config/passport');
const cookieSession = require('cookie-session');
const flash = require('connect-flash');


mainBase();
require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }));
app.use(flash());

//initializing passport
passportAuth(passport)

//Passport
app.use(passport.initialize());
app.use(passport.session());

//cookie 
app.use(cookieSession ({
    secret: 'secret',
    resave: true,
    saveUninitialize: true,
    keys: [process.env.KEYS]
}));


//Global Vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next();
})


//routes
app.use('/api/users', require('./routes/user'));
app.use('/auth', require('./routes/auth'));

app.get('/message', (req , res)=> {
    res.json({message: "Server is alive"})
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
