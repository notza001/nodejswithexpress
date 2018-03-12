// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var bcrypt = require('bcrypt-nodejs');
var User = require('./../model/User');


// expose this function to our app using module.exports
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id).then(user => {
            done(null, user);
        });

    });
    passport.use(
        'local-login',
        new LocalStrategy({

            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
            function (req, username, password, done) {
                User.findOne({ where: { username: username } }).then(user => {
                    if (!user) {
                        req.session.errors = [{ 'msg': 'Username incorrect.' }];
                        return done(null, false);
                    }

                    if (!bcrypt.compareSync(password, user.password)) {
                        req.session.errors = [{ 'msg': 'Password incorrect.' }];
                        return done(null, false);
                    }
                    return done(null, user);

                })
            })
    );

};