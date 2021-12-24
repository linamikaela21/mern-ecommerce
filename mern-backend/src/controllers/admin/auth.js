const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {expiresIn: '1d'})
}

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        error: 'Admin already registered',
      })

    const { firstName, lastName, email, password } = req.body
    const hash_password = await bcrypt.hash(password, 10)

    const _user = new User({
      firstName,
      lastName,
      email,
      hash_password,
      userName: Math.random().toString(),
      role: 'ADMIN'
    })
    
    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({message: 'Something went wrong'});
      }

      if (data) {
        return res.status(201).json({
          message: "Admin created Successfully..!",
        })
  }
})
})
}

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password)
      if (isPassword && user.role === 'ADMIN') {
        const token = generateJwtToken(user._id, user.role)
        const { _id, firstName, lastName, email, role, fullName } = user
        res.cookie('token', token, { expiresIn: '1d'} )
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email, role, fullName },
        })
      } else {
        return res.status(400).json({
          message: 'Something went wrong',
        });
      }
    } else {
      return res.status(400).json({ message: 'Something went wrong' })
    }
  })
}

exports.signout = (req, res) => {
  res.clearCookie('token')
  res.status(200).json({
    menssage: 'Signout successfully'
  })
  }