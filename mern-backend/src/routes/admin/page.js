const express = require('express')
const { createPage } = require('../../controllers/admin/page')
const router = express.Router()

router.post('/page/create', createPage)

module.exports = router