import { Route, Routes } from "react-router-dom"
import { isUserLoggedIn } from '../redux/actions/auth.actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Home } from '../containers/Home/Home'

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
      </Routes>
      </>
    )
}
