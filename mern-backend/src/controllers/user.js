const User = require('../models/user')

exports.singup = (req, res) => {
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(user) res.status(200).json({menssage: 'User already registered'})
    })

    const {
        firstName,
        lastName,
        email,
        hash_password,
    } = req.body

    const _user = new User({
        firstName,
        lastName,
        email,
        hash_password,
        userName: Math.random().toString()
    })

    _user.save((error, data) => {
        if(error) res.status(400).json({menssage: 'Something was wrong'})
        if(data) res.status(201).json({menssage: 'User created successfully'})
    })
}