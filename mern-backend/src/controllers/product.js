const Product = require('../models/Product')
const Category = require('../models/Category')
const slugify = require('slugify')

exports.createProduct = (req, res) => {
    //res.status(200).json({ file: req.files, body: req.body })

    const {
        name, description, price, quantity, category, image
    } = req.body

    const product = new Product({
        name,
        slug: slugify(name),
        description,
        price,
        image,
        category,
        quantity,
        createBy: req.user._id,
    })

    product.save((error, product) => {
        if (error) return res.status(400).json({ error })
        if (product) return res.status(201).json({ product, msg: 'Product add it successfully / Product agregada exitosamente' })
    })
}

exports.getProductsBySlug = (req, res) => {
    const { slug } = req.params;
    Category.findOne({ slug: slug })
        .select("_id")
        .exec((error, category) => {
            if (error) {
                return res.status(400).json({ error });
            }
            //return res.status(200).json( { category })
            if (category) {
                console.log(category._id.toString());
                Product.find({ category: category._id })
                .exec((error, product) => {
                    if (error) {
                        return res.status(400).json({ error });
                    }
                    //return res.status(200).json({ product })
                    if (product) {
                        return res.status(200).json({ 
                            product,
                            productByPrice: {
                                under5k: product.filter(prod => prod.price <= 5000),
                                under10k: product.filter(prod => prod.price > 5000 && prod.price <= 10000),
                                under15k: product.filter(prod => prod.price > 10000 && prod.price <= 15000),
                                under20k: product.filter(prod => prod.price > 15000 && prod.price <= 20000),
                                under30k: product.filter(prod => prod.price > 20000 && prod.price <= 30000)
                            }
                        })
                    }
                })
            }
        })
}
