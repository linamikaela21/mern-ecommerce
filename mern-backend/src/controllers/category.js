const Category = require('../models/Category')
const slugify = require('slugify')

const createCategories = (categories, parentId = null) => {
    const categoriesList = []

    let category
    if(parentId == null) { category = categories.filter(cat => cat.parentId == undefined) }
    else category = categories.filter(cat => cat.parentId == parentId)
    
    for(cat of category) {
        categoriesList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            parentId: cat.parentId,
            categoryPicture: cat.categoryPicture,
            subCat: createCategories(categories, cat._id)
        })
    }

    return categoriesList
}

exports.addCategory = (req, res) => {
    
    const categoryObj = { 
        name: req.body.name,
        categoryPicture: req.body.categoryPicture,
        slug: slugify(req.body.name)
    }

    //if(req.file) categoryObj.categoryPicture = process.env.API + '/public/' + req.file.filename

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
        if(categories) {
         const categoriesList = createCategories(categories)
         res.status(200).json({ categoriesList })
        }
    })
}

exports.updateCategories = async (req, res) => {
    const { _id, name, parentId, type } = req.body
    console.log(req.body, 'Soy body');
    const updatedCategories = []
    if(name instanceof Array) {
        for (let i = 0; i < name.length; i++) {
            const category = {
                name: name[i],
                type: type[i]
            }
            if(parentId[i] !== '') {
                category.parentId = parentId[i]
            }
            const updatedCategory = await Category.findOneAndUpdate({_id: _id[i]}, category, { new: true})
            updatedCategories.push(updatedCategory)
        }
        return res.status(201).json({ updateCategories: updateCategories })
    } else {
        const category = { name, type }
        if(parentId !== '') {
            category.parentId = parentId
        }
        const updatedCategory = await Category.findOneAndUpdate({_id}, category, { new: true})
        return res.status(201).json({ updatedCategory })
    }
}