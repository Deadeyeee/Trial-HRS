const controller  = require('../controlers/message.controller.js');

const router = require('express').Router();

router.post('/addMessage', controller.create);
router.get('/getAllMessage', controller.findAll);
router.get('/getMessage/:id', controller.findOne);
router.patch('/updateMessage/:id', controller.update);
router.delete('/deleteMessage/:id', controller.delete);

module.exports = router;