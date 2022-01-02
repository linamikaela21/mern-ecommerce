const Product = require('../../models/Product')
const Category = require('../../models/Category')

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
            type: cat.type,
            categoryPicture: cat.categoryPicture,
            subCat: createCategories(categories, cat._id)
        })
    }

    return categoriesList
}

exports.initialData = async (req, res) => {

    const categories = await Category.find({}).exec()
    const products = await Product.find({})
    .select('_id name price quantity description image category')
    .populate({ path: 'category', select: '_id name'})
    .exec()

    res.status(200).json({
        categories: createCategories(categories), 
        products
    })
}