const controller  = require('../controlers/auth.controller.js');

const router = require('express').Router();

router.post('/login', controller.Login);
router.get('/verify-token', controller.verifyToken);
router.delete('/logout', controller.Logout);

module.exports = router;