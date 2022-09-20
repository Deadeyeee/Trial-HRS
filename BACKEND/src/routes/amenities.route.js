const controller  = require('../controlers/amenities.controller.js');

const router = require('express').Router();

router.post('/addAmenities', controller.create);
router.get('/getAllAmenities', controller.findAll);
router.get('/getAmenities/:id', controller.findOne);
router.patch('/updateAmenities/:id', controller.update);
router.delete('/deleteAmenities/:id', controller.delete);

module.exports = router;