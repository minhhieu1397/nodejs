var db =require('../db');
var User = require('../models/user.model');
var md5 = require('md5');

module.exports.index = function(req, res) {
    User.find().then(function(users) {
        res.render('listUser', {
            users: users
         });
    });
}

module.exports.create = function(req, res) {
    res.render('users/create');
}

module.exports.show = function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({ id: id}).value();
    res.render('users/view', {
        user: user
    });
}

module.exports.store = function(req, res) {
    // console.log(shortid.generate());
    
    // db.get('users').push(req.body).write();
    // res.redirect('/users');
    User.create({ name: req.body.name, phone: req.body.phone, email: req.body.email, password: md5(req.body.password)});
    res.redirect('/users');
}