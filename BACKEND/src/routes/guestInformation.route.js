const controller  = require('../controlers/guestInformation.controller.js');

const router = require('express').Router();

router.post('/addGuest', controller.create);
router.get('/getAllGuest', controller.findAll);
router.get('/getGuest/:id', controller.findOne);
router.patch('/updateGuest/:id', controller.update);
router.delete('/deleteGuest/:id', controller.delete);

module.exports = router;