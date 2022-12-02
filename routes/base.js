const express = require('express')
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/api/product/list', productController.listProduct)
router.get('/api/product/detail/:id', productController.detailProduct)
router.post('/api/product/add', productController.addProduct)
module.exports = router 