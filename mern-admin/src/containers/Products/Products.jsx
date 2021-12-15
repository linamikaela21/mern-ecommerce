import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../../redux/actions/product.actions"
import { ViewProducts } from "./ViewProducts"

export const Products = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [productPictures, setProductPictures] = useState([])

    const products = useSelector(state => state.products)
    const category = useSelector(state => state.categories)

    const createCategoriesList = (categories, options = []) => {
        for (let cat of categories) {
            options.push({ value: cat._id, name: cat.name })
            if (cat.subCat.length > 0) createCategoriesList(cat.subCat, options)
        }
        return options
    }

    const handleProductImage = (e) => {
        setProductPictures([
            ...productPictures,
            e.target.files[0]
        ])
    }

    const handleNewProduct = (e) => {

        const form = new FormData()

        //const prod = { name, quantity, price, description, categoryId, productPictures }

        form.append('name', name)
        form.append('quantity', quantity)
        form.append('price', price)
        form.append('description', description)
        form.append('category', categoryId)
        
        productPictures.forEach(pic => {
            form.append('productPictures', pic)
        })

        dispatch(addProduct(form))

        setShow(false)

        setName('')
        setQuantity('')
        setPrice('')
        setDescription('')
        setCategoryId('')
        setProductPictures([])

    }
    
    return (
        <div>
            <ViewProducts
                products={products}
                category={category}
                show={show}
                setShow={setShow}
                name={name}
                setName={setName}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                description={description}
                setDescription={setDescription}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                productPictures={productPictures}
                handleProductImage={handleProductImage}
                createCategoriesList={createCategoriesList}
                handleNewProduct={handleNewProduct}
            />
        </div>
    )
}
