const controller  = require('../controlers/user.controller.js');

const router = require('express').Router();

router.post('/addUser', controller.create);
router.post('/resendEmail', controller.resendEmail);
router.get('/getAllUsers', controller.findAll);
router.get('/getUsers/:id', controller.findOne);
router.patch('/updateUsers/:id', controller.update);
router.patch('/confirmEmail/:id', controller.confirmEmail);
router.delete('/deleteUser/:id', controller.delete);

module.exports = router;