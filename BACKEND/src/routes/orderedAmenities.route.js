const controller  = require('../controlers/orderedAmenities.controller.js');

const router = require('express').Router();

router.post('/addOrderedAmenities', controller.create);
router.get('/getAllOrderedAmenities', controller.findAll);
router.get('/getOrderedAmenities/:id', controller.findOne);
router.patch('/updateOrderedAmenities/:id', controller.update);
router.delete('/deleteOrderedAmenities/:id', controller.delete);

module.exports = router;