const controller  = require('../controlers/payment.controller.js');

const router = require('express').Router();

router.post('/addPayment', controller.create);
router.get('/getAllPayment', controller.findAll);
router.get('/getPayment/:id', controller.findOne);
router.patch('/updatePayment/:id',  controller.update);
router.patch('/updatePaymentPhoto/:id', controller.upload, controller.updatePhoto);
router.delete('/deletePayment/:id', controller.delete);

router.post('/deleteImage', controller.ImageDelete);

module.exports = router;