import { Route, Routes } from "react-router-dom"
import { Home } from '../containers/Home/Home'
import { SignIn } from '../containers/SignIn/SignIn'
import { SignUp } from '../containers/SignUp/SignUp'

export const RouterWeb = () => {
    return (
      <>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/signin' element={<SignIn/>} />
      <Route exact path='/signup' element={<SignUp/>} />
      </Routes>
      </>
    )
}
