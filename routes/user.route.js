var express = require('express')
var router = express.Router();
var validate = require('../validate/user.validate');
var authMiddleware = require('../middlewares/auth.middleware');

var controller = require('../controller/user.controller');

router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/create', authMiddleware.requireAuth, controller.create);

router.get('/:id', authMiddleware.requireAuth, controller.show);

router.post('/store', authMiddleware.requireAuth, validate.postCreate, controller.store);

module.exports = router;
