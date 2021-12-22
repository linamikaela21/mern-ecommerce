import { categoriesContants } from '../actions/constants'

const initialState = {
    categories: [],
    loading: false,
    error: null
}

const buildNewCategory = (parentId, categories, category) => {
    let myCategories = []

    console.log(parentId, categories, category)

    if(parentId === undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                subCat: []
            }
        ];
    }

    for(let cat of categories) {
        if(cat._id === parentId){
            const newCategory = {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                parentId: category.parentId,
                subCat: []
            }
            myCategories.push({
                ...cat,
                subCat: cat.subCat.length > 0 ? [...cat.subCat, newCategory] : [newCategory]
            })
        }else{
            myCategories.push({
                ...cat,
                subCat: cat.subCat ? buildNewCategory(parentId, cat.subCat, category) : []
            });
        }
    }
    return myCategories
}

export const categoriesReducers = (state = initialState, action) => {
    console.log('reducer =>', action.type, action.payload, 'vos sos undefined ?')
    switch (action.type) {

        case categoriesContants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break

        case categoriesContants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break

        case categoriesContants.ADD_NEW_CATEGORY_SUCCESS:
            const category = action.payload.categories
            const upgradeCategories = buildNewCategory(category.parentId, state.categories, category)
            state = {
                ...state,
                categories: upgradeCategories,
                loading: false,
            }
            break

        case categoriesContants.ADD_NEW_CATEGORY_FAIL:
            state = {
                ...initialState,
                loading: false,
                error: action.payload.error
            }
            break

        default:
            return state
    }

    return state
}

export default categoriesReducers