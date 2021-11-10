const { check, validationResult } = require('express-validator')

exports.validateSignUpRequest = [
    check('firstName')
    .notEmpty()
    .withMessage('FirstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('LastName is required'),
    check('email')
    .isEmail()
    .withMessage('Valid E-mail is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long')
]

exports.validateSignInRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid E-mail is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long')
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.array().length > 0) return res.status(400).json({ errors: errors.array()[0].msg })

    next()
}
