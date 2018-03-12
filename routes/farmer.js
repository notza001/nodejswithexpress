var express = require('express');
var router = express.Router();

var modelFarmer = require('../model/Farmer');

router.get('/', function(req, res, next) {
    modelFarmer.findAll().then( result => {
        res.render('farmer/index',{
            title:"Farmer",
            user : req.user, 
            page_name :"farmer" ,
            result : result
        });     
    })
      
});
router.get('/callback', function(req, res, next) {
    fn3()
});


const fn1 = () => {
    setTimeout(() => {
      console.log('fn1')
    }, 2000)
  }
  
  const fn2 = () => {
    fn1()
    setTimeout(() => {
      console.log('fn2')
    }, 1000)
  }
  
  const fn3 = () => {
    fn2()
  }
  
  


module.exports = router;