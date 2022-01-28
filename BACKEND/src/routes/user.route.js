const controller  = require('../controlers/user.controller.js');

const router = require('express').Router();

router.post('/addUser', controller.create);
router.get('/getUsers', controller.findAll);

module.exports = router;