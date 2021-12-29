const express = require('express')
const router = express.Router()
// const multer = require('multer')
// const shortId = require('shortId')
// const path = require('path')

const { addCategory, getCategories, updateCategories, deleteCategories } = require('../controllers/category')
const { requireSignIn, adminMiddleware } = require('../middleware/middleware')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(path.dirname(__dirname), 'uploads'))
//     },
//     filename: function (req, file, cb) {
//       cb(null, shortId.generate() + '-' + file.originalname)
//     }
//   })

//   const upload = multer({ storage })

router.post('/category/create', requireSignIn, adminMiddleware, addCategory)
router.get('/category/getCategories', getCategories)
router.post('/category/update', updateCategories)
router.post('/category/delete', deleteCategories)

module.exports = router