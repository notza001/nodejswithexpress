var express = require('express');
var router = express.Router();
var passport          = require('passport');
require('./../app/passport')(passport); // pass passport for configuration

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { 
    title: 'Login',
    errors: req.session.errors 
  });
  req.session.errors = null;
});


/// For Validate
// router.post('/login', function(req, res, next) {
//   req.check('username', 'Invalid Username').isEmpty();
//   req.check('password', 'Password is invalid').isLength({min: 4});

//   var errors = req.validationErrors();
//   if (errors) {
//     req.session.errors = errors;
//   } 
//   res.redirect('/users/login');
// });

router.post("/login", passport.authenticate('local-login', {
  
  successRedirect: '/',

  failureRedirect: '/users/login',

  failureFlash: true

}), function(req, res, info){
  req.session.errors = null;
});

module.exports = router;
