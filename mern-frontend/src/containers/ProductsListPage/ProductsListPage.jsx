import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getProductsBySlug } from "../../redux/actions"
import { ViewProductsListPage } from "./ViewProductsListPage"

export const ProductsListPage = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const { slug } = useParams()

    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000,
    })
    
    useEffect(() => {
        console.log(slug);
        dispatch(getProductsBySlug(slug))
    }, [dispatch, slug])
    return (
        <div>
            <ViewProductsListPage 
            products={products} 
            slug={slug}
            priceRange={priceRange}
            />
        </div>
    )
}
