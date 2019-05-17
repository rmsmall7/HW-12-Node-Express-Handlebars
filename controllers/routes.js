// This will store the get, put and post routes for the app

// This section list the items that are required 
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js')

//creating the routes that will be used. I consoled the data to double check my work.  Once I saw it was working I commented the console.log out

router.get('/', function(req, res){
  burger.all(function(burger_data){
    // console.log(burger_data);
    res.render('index', {burger_data});
  })
})

router.put('/burgers/update', function(req, res){
  burger.update(req.body.burger_id, function(result){
    // console.log(result);
    res.redirect('/');
  });
});

router.post('/burgers/create', function(req, res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})

module.exports = router;