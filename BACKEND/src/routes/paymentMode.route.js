const controller  = require('../controlers/paymentMode.controller.js');

const router = require('express').Router();

router.post('/addPaymentMode', controller.create);
router.get('/getAllPaymentMode', controller.findAll);
router.get('/getPaymentMode/:id', controller.findOne);
router.patch('/updatePaymentMode/:id', controller.update);
router.delete('/deletePaymentMode/:id', controller.delete);

module.exports = router;