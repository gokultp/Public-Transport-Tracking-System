var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();
var Bus = require('../models/bus');
var BusStop = require('../models/busstop');


router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.get('/bus', function (req, res) {
    Bus.find({}, function(err, buses) {
          if (err) throw err;

            
            res.render('bus', { user : req.user ,buses : buses});
               console.log(buses[0].name);
               });
});


router.get('/busstop', function (req, res) {
    BusStop.find({}, function(err, busStops) {
          if (err) throw err;

            
            res.render('busStop', { user : req.user ,busStops : busStops});
               console.log(busStops[0].lat);
               });
});





router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/bus', function(req, res) {

    var newUser = Bus({
          name: req.body.name,
          regno: req.body.regno,
          route: req.body.route     
    });

    // save the user
     newUser.save(function(err) {
       if (err) throw err;
    
         console.log('Bus created!');
         });
    
    res.render('bus', { user : req.user });

    
});

router.post('/busstop', function(req, res) {

    var newUser = BusStop({
          name: req.body.name,
          lat: req.body.lat,
          lng: req.body.lng     
    });

    // save the user
     newUser.save(function(err) {
       if (err) throw err;
    
         console.log('Bus Stop created!');
         });
    
    res.render('busStop', { user : req.user });

    
});


router.get('/route', function (req, res) {
    BusStop.find({}, function(err, busStops) {
          if (err) throw err;

            
            res.render('route', { user : req.user ,busStops : busStops});
               console.log(busStops[0].lat);
               });
});




router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });

        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});


router.post('/pos', function(req, res) {
        var obj = {};
        console.log('body: ');
        res.send(req.body); 

});



router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.get('/traffic', function(req, res) {
    res.render('traffic', { user : req.user });
});




router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(status).send("pong!", 200);
});

module.exports = router;
