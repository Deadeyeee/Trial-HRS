const controller  = require('../controlers/deleteConversation.controller.js');

const router = require('express').Router();

router.post('/addDeleteConversation', controller.create);
router.get('/getAllDeleteConversation', controller.findAll);
router.get('/getDeleteConversation/:id', controller.findOne);
router.patch('/updateDeleteConversation/:id', controller.update);
router.delete('/deleteDeleteConversation/:id', controller.delete);

module.exports = router;