const controller  = require('../controlers/usedServices.controller.js');

const router = require('express').Router();

router.post('/addUsedServices', controller.create);
router.get('/getAllUsedServices', controller.findAll);
router.get('/getUsedServices/:id', controller.findOne);
router.patch('/updateUsedServices/:id', controller.update);
router.delete('/deleteUsedServices/:id', controller.delete);

module.exports = router;