const controller  = require('../controlers/auth.controller.js');

const router = require('express').Router();

router.post('/login', controller.Login);
router.get('/verify-token', controller.verifyToken);
router.get('/verify-email-token/:id', controller.verifyEmailToken);
router.delete('/logout', controller.Logout);

module.exports = router;