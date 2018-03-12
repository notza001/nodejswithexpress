// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var bcrypt = require('bcrypt-nodejs');
var User = require('./../model/User');


// expose this function to our app using module.exports
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
            done(null, user.id);
    });
 
    passport.deserializeUser(function(id, done) {
                User.findById(id).then(  user => {
                    done(null,user);
                });
             
    });
    passport.use(
        'local-login',
            new LocalStrategy({
                
                usernameField : 'username',
                passwordField : 'password',
                passReqToCallback : true 
            },
            function(req, username, password, done) { 
                    User.findOne({ where: {username : username} }).then(  user => {
                        if (!user) {
                                return done(null, false, req.flash('loginMessage', 'Username incorrect.')); 
                            }
                       
                        if (!bcrypt.compareSync(password, user.password))
                                return done(null, false, req.flash('loginMessage', 'Password incorrect.')); 

                        
                                return done(null, user);

                    })          
            })
    );

};