const Product = require('../models/product')
const slugify = require('slugify')

exports.createProduct = (req, res) => {
    //res.status(200).json({ file: req.files, body: req.body })

    const { 
        name, description, price, offer, reviews, category, createBy, updateAt
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
        createBy: req.user._id, 
    })

    product.save((error, product) => {
        if(error) return res.status(400).json({ error })
        if(product) return res.status(201).json({ product, msg: 'Product add it successfully / Product agregada exitosamente' })
    })
}

// const createProduct = (products, parentId = null) => {
//     const productsList = []

//     let product
//     if(parentId == null) { product = products.filter(prod => req.body.parentId == undefined) }
//     else product = products.filter(prod => req.body.parentId == parentId)
    
//     for(prod of products) {
//         productsList.push({
            // _id: req.body._id,
            // name: req.body.name,
            // slug: req.body.slug,
            // description: req.body.description,
            // price: req.body.price,
            // offer: req.body.offer,
            // productPicture: req.body.productPicture,
            // reviews: req.body.reviews,
            // category: req.body.category,
            // createBy: req.body.createBy,
            // updateAt: req.body.updateAt
//             // subprod: createProduct(products, req.body._id)
//         })
//     }

//     return productsList
// }

// exports.addProduct = (req, res) => {
    
//     const productObj = { 
//         name: req.body.name,
//         slug: slugify(req.body.name)
//     }

//     if(req.body.parentId) productObj.parentId = req.body.parentId

//     const prod = new Product(productObj)

    // req.body.save((error, product) => {
    //     if(error) return res.status(400).json({ error })
    //     if(product) return res.status(201).json({ product, msg: 'Product add it successfully / Product agregada exitosamente' })
    // })
// }

// exports.getProduct = (req, res) => {

//     Product.find({})
    
//     .exec((error, products) => {
//         if(error) return res.status(400).json({ error })

//         const productsList = addProduct(products)

//         if(products) return res.status(201).json({ productsList })
//     })
// }