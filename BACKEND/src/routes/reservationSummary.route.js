const controller  = require('../controlers/reservationSummary.controller.js');

const router = require('express').Router();

router.post('/addReservationSummary', controller.create);
router.get('/getAllReservationSummary', controller.findAll);
router.get('/getReservationSummary/:id', controller.findOne);
router.patch('/updateReservationSummary/:id', controller.update);
router.delete('/deleteReservationSummary/:id', controller.delete);

module.exports = router;