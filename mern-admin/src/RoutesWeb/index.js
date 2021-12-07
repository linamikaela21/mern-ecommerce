import { Route, Routes } from "react-router-dom"
import { isUserLoggedIn } from '../redux/actions/auth.actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Home } from '../containers/Home/Home'
import { SignIn } from "../containers/SignIn/SignIn"
import { SignUp } from "../containers/SignUp/SignUp"
import { Products } from "../containers/Products/Products"
import { Orders } from "../containers/Orders/Orders"

export const RouterWeb = () => {
  
  const dispatch = useDispatch()
  
  const auth = useSelector(state => state.auth)
  
  useEffect(() => {
    if(!auth.authenticate) {
    dispatch(isUserLoggedIn)
    }
}, [dispatch, auth.authenticate])

    return (
      <>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signin' element={<SignIn/>} />
      <Route exact path='/signup' element={<SignUp />} />
      <Route path='/products' element={<Products />} />
      <Route path='/orders' element={<Orders />} />
      </Routes>
      </>
    )
}
