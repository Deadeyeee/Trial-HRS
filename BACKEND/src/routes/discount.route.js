const controller  = require('../controlers/discount.controller.js');

const router = require('express').Router();

router.post('/addDiscount', controller.create);
router.get('/getAllDiscount', controller.findAll);
router.get('/getDiscount/:id', controller.findOne);
router.patch('/updateDiscount/:id', controller.update);
router.delete('/deleteDiscount/:id', controller.delete);

module.exports = router;