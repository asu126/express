var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('logout', { title: 'logout' });
  req.session.destroy(function(err) {
    res.render('logout', { title: 'logout' });
  })
});

module.exports = router;
