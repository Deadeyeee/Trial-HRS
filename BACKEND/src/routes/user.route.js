const controller  = require('../controlers/user.controller.js');

const router = require('express').Router();

router.post('/addUser', controller.create);
router.post('/resendEmail', controller.resendEmail);
router.post('/resetPassword', controller.resetPassword);
router.get('/getAllUsers', controller.findAll);
router.get('/getUsers/:id', controller.findOne);
router.patch('/updateUsers/:id', controller.update);
router.patch('/confirmEmail', controller.confirmEmail);
router.delete('/deleteUser/:id', controller.delete);


router.post('/sendReservationEmail', controller.sendReservationEmail);


module.exports = router;