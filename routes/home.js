var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('home', { title: 'home' });
  // res.send('respond with a home');
  var user={
    username:'admin',
    password:'admin'
  }
  res.render('home', { title: 'Home',user: user});
});

module.exports = router;
