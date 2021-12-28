import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductsBySlug } from "../../redux/actions"
import { ViewProductsListPage } from "./ViewProductsListPage"

export const ProductsListPage = () => {

    const dispatch = useDispatch()

    const { slug } = useParams()
    
    useEffect(() => {
        console.log(slug);
        dispatch(getProductsBySlug(slug))
    }, [dispatch, slug])
    return (
        <div>
            <ViewProductsListPage />
        </div>
    )
}
