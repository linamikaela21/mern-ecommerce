import { Route, Routes } from "react-router-dom"
import { HomePage } from "../containers/HomePage/HomePage"
import { ProductsListPage } from "../containers/ProductsListPage/ProductsListPage"

export const RouterWeb = () => {
  
    return (
      <>
      <Routes>
       <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/:slug' element={<ProductsListPage />} />
      </Routes>
      </>
    )
}
