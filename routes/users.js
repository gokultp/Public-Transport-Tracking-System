var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
   res.sendfile('views/users.html');
});

module.exports = router;
