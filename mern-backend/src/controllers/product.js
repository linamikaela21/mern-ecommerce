const Product = require('../models/product')
const slugify = require('slugify')

exports.createProduct = (req, res) => {
    //res.status(200).json({ file: req.files, body: req.body })

    const { 
        name, description, price, quantity, category
    } = req.body

    let productPicture = []

    if(req.files.length > 0) {
        productPicture = req.files.map(file => { return { img: file.filename}})
    }

    const product = new Product({
        name, 
        slug: slugify(name), 
        description, 
        price, 
        productPicture, 
        category, 
        quantity,
        createBy: req.user._id, 
    })

    product.save((error, product) => {
        if(error) return res.status(400).json({ error })
        if(product) return res.status(201).json({ product, msg: 'Product add it successfully / Product agregada exitosamente' })
    })
}