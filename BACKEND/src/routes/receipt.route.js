const controller  = require('../controlers/receipt.controller.js');

const router = require('express').Router();

router.post('/addReceipt', controller.create);
router.get('/getAllReceipt', controller.findAll);
router.get('/getReceipt/:id', controller.findOne);
router.patch('/updateReceipt/:id', controller.update);
router.delete('/deleteReceipt/:id', controller.delete);

module.exports = router;