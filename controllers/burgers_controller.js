// Dependencies
var express = require('express');
var db = require('../models');

//Create all our routes
var router = express.Router();

router.get('/', function(req, res){
	res.redirect("index");
});

router.get('/index', function(req, res){
	db.Burgers.findAll({}).then(function(data){
		res.render("index", { burgers: data });
	});
});

router.post('/burgers/insertBurger', function(req, res){
	db.Burgers.create({
		burger_name: req.body.burger_name
	}).then(function(){
		res.redirect('/');
	});
});

router.put('/burgers/updateBurger/:id', function(req, res){
	db.Burgers.update({
		devoured: true
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(){
		res.redirect('/');
	});
});

// Export router
module.exports = router;