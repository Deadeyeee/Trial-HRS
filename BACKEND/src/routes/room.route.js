const controller  = require('../controlers/room.controller.js');

const router = require('express').Router();

router.post('/addRoom', controller.create);
router.get('/getAllRoom', controller.findAll);
router.get('/getRoom/:id', controller.findOne);
router.patch('/updateRoom/:id', controller.update);
router.delete('/deleteRoom/:id', controller.delete);

module.exports = router;