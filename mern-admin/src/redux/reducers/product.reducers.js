import { productContants } from '../actions/constants'

const initialState = {
    products: [],
    error: null
}

export const productsReducers = (state = initialState, action) => {
    console.log('reducer =>', action.type, 'payload =>', action.payload)
    switch (action.type) {

        case productContants.ADD_NEW_PRODUCT_REQUEST:
            state = {
                ...state
            }
            break

        case productContants.ADD_NEW_PRODUCT_SUCCESS:
            state = {
                ...state
            }
            break;

        case productContants.ADD_NEW_PRODUCT_FAIL:
            state = {
                ...initialState,
                error: action.payload.error
            }
            break

        default:
            return state
    }

    return state
}

export default productsReducers