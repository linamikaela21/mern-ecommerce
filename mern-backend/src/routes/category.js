const express = require('express')
const router = express.Router()

const { addCategory, getCategories } = require('../controllers/category')
const { requireSignIn, adminMiddleware } = require('../middleware/middleware')

router.post('/category/create', requireSignIn, adminMiddleware, addCategory)
router.get('/category/getCategories', getCategories)

module.exports = router