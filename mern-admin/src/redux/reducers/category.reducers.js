import { categoriesContants } from '../actions/constants'

const initialState = {
    categories: [],
    error: null,
    logging: false
}

export const categoriesReducers = (state = initialState, action) => {

    switch (action.type) {

        case categoriesContants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                logging: true,
                categories: action.payload.categories
            }
            break

        case categoriesContants.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                logging: true,
            }
            break

        case categoriesContants.ADD_NEW_CATEGORY_SUCCESS:
            state = {
                ...state,
                logging: false,
            }
            break

        case categoriesContants.ADD_NEW_CATEGORY_FAIL:
            state = {
                ...initialState,
            }
            break

        default:
            return state
    }

    return state
}

export default categoriesReducers