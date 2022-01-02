const createCategoriesList = (categories, options = []) => {
    for (let cat of categories) {
        options.push({ 
            value: cat._id, 
            name: cat.name, 
            parentId: cat.parentId, 
            type: cat.type,
        })
        if (cat.subCat.length > 0) createCategoriesList(cat.subCat, options)
    }
    return options
}

export default createCategoriesList