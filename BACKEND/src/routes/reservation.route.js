const controller  = require('../controlers/reservation.controller.js');

const router = require('express').Router();

router.post('/addReservation', controller.create);
router.get('/getAllReservation', controller.findAll);
router.get('/getReservation/:id', controller.findOne);
router.patch('/updateReservation/:id', controller.update);
router.delete('/deleteReservation/:id', controller.delete);

module.exports = router;