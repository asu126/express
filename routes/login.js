var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/', function (req, res) {
  // res.send('POST request to homepage');
  var user={
    username:'admin',
    password:'admin'
  }
  if(req.body.username===user.username && req.body.password===user.password){
    req.session.user=user;
    res.redirect('/home');
    return;
  }
  res.redirect('/login');
});

module.exports = router;
