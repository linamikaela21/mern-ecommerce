import { Route, Routes } from "react-router-dom"
import { HomePage } from "../containers/HomePage/HomePage"
// import { isUserLoggedIn } from '../redux/actions/auth.actions'
// import { useEffect } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
//import { getInitialData } from "../redux/actions/initialData.actions"

export const RouterWeb = () => {
  
//   const dispatch = useDispatch()
  
//   const auth = useSelector(state => state.auth)
  
//   useEffect(() => {
//     if(!auth.authenticate) {
//     dispatch(isUserLoggedIn())
//     }
//       dispatch(getInitialData())
// }, [dispatch, auth.authenticate])

    return (
      <>
      <Routes>
       <Route exact path='/' element={<HomePage/>} />
      {/*<Route exact path='/signin' element={<SignIn/>} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/orders' element={<Orders />} />
      <Route exact path='/categories' element={<Categories />} /> */}
      </Routes>
      </>
    )
}
