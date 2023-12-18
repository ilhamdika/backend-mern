var express = require('express');
var router = express.Router();
const apiController = require('../controllers/apiController');
const jwtMiddleware = require('../middleware/jwt');

router.post('/register', apiController.register);
router.post('/login', apiController.login);

router.get('/produk',jwtMiddleware.authenticatedToken, apiController.getAllProduk);
router.get('/produk/:id',jwtMiddleware.authenticatedToken, apiController.getProdukById);
router.post('/produk',jwtMiddleware.authenticatedToken, apiController.createProduk);
router.put('/produk/:id',jwtMiddleware.authenticatedToken, apiController.updateProduk);
router.delete('/produk/:id',jwtMiddleware.authenticatedToken, apiController.deleteProduk);


module.exports = router;