const express = require('express')
const router = express.Router()

const { addItemToCart } = require('../controllers/cart')
const { requireSignIn, userMiddleware } = require('../middleware/middleware')

router.post('/cart/addtocart', requireSignIn, userMiddleware, addItemToCart)

module.exports = router