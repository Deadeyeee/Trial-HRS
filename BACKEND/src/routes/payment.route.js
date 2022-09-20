const controller  = require('../controlers/payment.controller.js');

const router = require('express').Router();

router.post('/addPayment', controller.create);
router.get('/getAllPayment', controller.findAll);
router.get('/getPayment/:id', controller.findOne);
router.patch('/updatePayment/:id', controller.update);
router.delete('/deletePayment/:id', controller.delete);

module.exports = router;