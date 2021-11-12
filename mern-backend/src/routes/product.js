const express = require('express')
const router = express.Router()
const multer = require('multer')
const shortId = require('shortId')
const path = require('path')

const { createProduct, addProduct, getProduct } = require('../controllers/product')
const { requireSignIn, adminMiddleware } = require('../middleware/middleware')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortId.generate() + '-' + file.originalname)
    }
  })

  const upload = multer({ storage })

router.post('/product/create', requireSignIn, adminMiddleware, upload.array('productPicture'), createProduct)
// router.get('/product/getProduct', getProduct)

module.exports = router