import { Route, Routes } from "react-router-dom"
import { isUserLoggedIn } from '../redux/actions/auth.actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Home } from '../containers/Home/Home'
import { SignIn } from "../containers/SignIn/SignIn"
import { SignUp } from "../containers/SignUp/SignUp"
import { Products } from "../containers/Products/Products"
import { Orders } from "../containers/Orders/Orders"
import { Categories } from "../containers/Categories/Categories"
import { getInitialData } from "../redux/actions/initialData.actions"

export const RouterWeb = () => {
  
  const dispatch = useDispatch()
  
  const auth = useSelector(state => state.auth)
  
  useEffect(() => {
    if(!auth.authenticate) {
    dispatch(isUserLoggedIn())
    }
      dispatch(getInitialData())
}, [dispatch, auth.authenticate])

    return (
      <>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signin' element={<SignIn/>} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/orders' element={<Orders />} />
      <Route exact path='/categories' element={<Categories />} />
      </Routes>
      </>
    )
}
