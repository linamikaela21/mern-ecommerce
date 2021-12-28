import { productsContants } from '../actions/constants'

const initialState = {
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: []
    },
    error: null
}

export const productsReducers = (state = initialState, action) => {
    console.log('reducer =>', action.type, 'payload =>', action.payload)
    switch (action.type) {

        case productsContants.GET_PRODUCTS_BY_SLUG_SUCCESS:
            state = {
                ...state,
                products: action.payload.product,
                productsByPrice: {
                    ...action.payload.productByPrice
                }
            }
            break

        default:
            return state
    }

    return state
}

export default productsReducers