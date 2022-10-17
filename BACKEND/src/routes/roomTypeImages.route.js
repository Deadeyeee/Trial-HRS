const controller  = require('../controlers/roomTypeImages.controller.js');

const router = require('express').Router();

router.post('/addRoomTypeImages', controller.upload, controller.create);
router.get('/getAllRoomTypeImages', controller.findAll);
router.get('/getRoomTypeImages/:id', controller.findOne);
router.patch('/updateRoomTypeImages/:id', controller.update);
router.delete('/deleteRoomTypeImages/:id', controller.delete);

router.post('/deleteImageRoom', controller.ImageDelete);
module.exports = router;