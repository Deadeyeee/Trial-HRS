const controller  = require('../controlers/services.controller.js');

const router = require('express').Router();

router.post('/addServices', controller.create);
router.get('/getAllServices', controller.findAll);
router.get('/getServices/:id', controller.findOne);
router.patch('/updateServices/:id', controller.update);
router.delete('/deleteServices/:id', controller.delete);

module.exports = router;