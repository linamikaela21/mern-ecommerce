const express = require('express')
const router = express.Router()

// const { addProduct, getProduct } = require('../controllers/product')
const { requireSignIn, adminMiddleware } = require('../middleware/middleware')

router.post('/product/create', requireSignIn, adminMiddleware, addProduct)
// router.get('/product/getProduct', getProduct)

module.exports = router