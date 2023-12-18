var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/produk', apiController.getAllProduk);
router.get('/produk/:id', apiController.getProdukById);
router.post('/produk', apiController.createProduk);
router.put('/produk/:id', apiController.updateProduk);
router.delete('/produk/:id', apiController.deleteProduk);


module.exports = router;