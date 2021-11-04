const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    profilePhoto: {type: String},
    contactNumber: {type: String},
}, {timestamps: true})

//10 es la cantidad de caracteres de longitud que setteo al hast para la password
userSchema.virtual('password').set((password)=> this.hash_password = bcrypt.hashSync(password, 10))

userSchema.methods = {
    authenticate: (password)=> bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model('User', userSchema)