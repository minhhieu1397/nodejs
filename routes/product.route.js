var express = require('express')
var router = express.Router();

var controller = require('../controller/product.controller');

router.get('/index', controller.index);

module.exports = router;