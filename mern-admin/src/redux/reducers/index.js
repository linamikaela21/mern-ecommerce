const initialState = {
    logged: false
  }
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case 'GET_BEST_LESSONS':
    //     return { ...state, bestLessons: action.payload }

      default:
        return state
    }
  }

  export default rootReducer