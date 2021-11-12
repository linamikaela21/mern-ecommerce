const slugify = require('slugify')
const Category = require('../models/category')

const createCategories = (categories, parentId = null) => {
    const categoriesList = []

    let category
    if(parentId == null) { category = categories.filter(cat => cat.parentId == undefined) }
    else category = categories.filter(cat => cat.parentId == parentId)
    
    for(cat of categories) {
        categoriesList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            subCat: createCategories(categories, cat._id)
        })
    }

    return categoriesList
}

exports.addCategory = (req, res) => {
    
    const categoryObj = { 
        name: req.body.name,
        slug: slugify(req.body.name)
    }

    if(req.body.parentId) categoryObj.parentId = req.body.parentId

    const cat = new Category(categoryObj)

    cat.save((error, category) => {
        if(error) return res.status(400).json({ error })
        if(category) return res.status(201).json({ category, msg: 'Category add it successfully / Categoria agregada exitosamente' })
    })
}

exports.getCategories = (req, res) => {

    Category.find({})
    
    .exec((error, categories) => {
        if(error) return res.status(400).json({ error })

        const categoriesList = createCategories(categories)

        if(categories) return res.status(201).json({ categoriesList })
    })
}