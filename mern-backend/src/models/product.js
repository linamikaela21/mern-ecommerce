const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    offer: { type: Number },
    productPicture: [
        { img: { type: String }}
    ],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createBy : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            reviews: String
        }
    ],
    updateAt: Date 
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)