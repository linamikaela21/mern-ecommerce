const express = require('express')
const { singup } = require('../controllers/user')
const router = express.Router()

router.post('/signun', singup)

router.post('/singip', )

module.exports = router