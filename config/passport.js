const localStrategy = require('passport-local').Strategy;
const registerationModel = require('../models/register');
const bcrypt = require('bcrypt');



// module.exports = function (passport) {

// passport.use(new localStrategy({ usernameField: 'username' }, (username, password, done) => {
//       console.log({
//         username: username,
//         password: password
//       });
//     registerationModel.findOne({ username: username }, function(err, user) {
//       console.log({
//         user: user
//       });
      
//       if(!user) done(null, false, { message: "username does not exist" } ); 

//       if (!user.password) {
//       return done(null, false, { msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.' });
//        }
      
//       bcrypt.compare(password, user.password, (err, match) => {
//           if(err) done(null, false, { message: 'Invalid Password'})

//           if(match) return done(null, user)
//           else return done(null, false, { message: 'Invalid Password'})
          
//       });
//     });
//   }
// ));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });


// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//          done(null, user);
//   });
//  });

// }

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


