const controller  = require('../controlers/roomType.controller.js');

const router = require('express').Router();

router.post('/addRoomType', controller.upload, controller.create);
router.get('/getAllRoomType', controller.findAll);
router.get('/getRoomType/:id', controller.findOne);
router.patch('/updateRoomType/:id', controller.upload, controller.update);
router.delete('/deleteRoomType/:id', controller.delete);

module.exports = router;