const localStrategy = require('passport-local').Strategy;
const registerationModel = require('../models/register');
const bcrypt = require('bcrypt');


module.exports = function(passport) {
  passport.use(
    new localStrategy({ usernameField: 'username' }, (username, password, done) => {
      console.log({
        username: username,
        password: password
      })
      // Match user
      registerationModel.findOne({
        username: username
      }).then(user => {
        console.log({
        user: user
      })
        if (!user) {
          return done(null, false, { message: 'That username is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    registerationModel.findById(id, function(err, user) {
      done(err, user);
    });
  });
};


