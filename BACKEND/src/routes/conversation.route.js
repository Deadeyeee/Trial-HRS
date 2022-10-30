const controller  = require('../controlers/conversation.controller.js');

const router = require('express').Router();

router.post('/addConversation', controller.create);
router.get('/getAllConversation', controller.findAll);
router.get('/getConversation/:id', controller.findOne);
router.patch('/updateConversation/:id', controller.update);
router.delete('/deleteConversation/:id', controller.delete);

module.exports = router;