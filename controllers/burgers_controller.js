// Dependencies
var express = require('express');
var db = require('../models');

//Create all our routes
var router = express.Router();

router.get('/', function(req, res){
	res.redirect("index");
});

router.get('/index', function(req, res){
	db.Burger.findAll({
		include: [db.Customer]
	}).then(function(data){
		res.render("index", { burger: data });
	});
});

router.post('/burgers/insert', function(req, res){
	db.Burger.create({
		burger_name: req.body.burger_name
	}).then(function(){
		res.redirect('/');
	});
});

router.post('/customer/insert', function(req, res){
	db.Customer.create({
		name: req.body.name,
		BurgerId: req.body.burgerId
	}).then(function(){
		db.Burger.update({
		devoured: true
	}, {
		where: {
			id: req.body.burgerId
		}
	}).then(function(){
		res.redirect('/');
	});
	})
	
});

// Export router
module.exports = router;