var express = require('express');
var router = express.Router();

var productController = require('../controllers/products.controller');

router.get('/getlist',productController.getProduct);
router.post('/add',productController.postProduct);
router.delete('/remove/:id',productController.deleteProduct);
router.put('/update/:id',productController.putProduct);

module.exports = router;