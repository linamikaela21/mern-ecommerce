import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/actions'
import { ViewProducts } from './ViewProducts'

export const Products = () => {

    const dispatch = useDispatch()
    
    const products = useSelector(state => state.products.products)
    const category = useSelector(state => state.categories)
    const { token } = useSelector(state => state.auth)

    const [show, setShow] = useState(false)

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [productPictures, setProductPictures] = useState([])


    const createCategoriesList = (categories, options = []) => {
        for (let cat of categories) {
            options.push({ value: cat._id, name: cat.name })
            if (cat.subCat.length > 0) createCategoriesList(cat.subCat, options)
        }
        return options
    }

    const [img, setImg] = useState('')

    const addImg = e => {
        e.preventDefault()
        setImg(e.target.value)
      }

    const handleProductImage = e => {
        e.preventDefault()
        setProductPictures([...productPictures, img])
        setImg('')
    }

    const handleNewProduct = async () => {

        let form = {
            name: name,
            slug: name,
            description: description,
            price: parseInt(price),
            quantity: parseInt(quantity),
            category: categoryId,
            image: productPictures
        }
        
        console.log('FORM => ', form)
        dispatch(addProduct(form, token))

        setShow(false)

        setName('')
        setQuantity('')
        setPrice('')
        setDescription('')
        setCategoryId('')
        setProductPictures([])

        window.location.reload()
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
                img={img}
                addImg={addImg}
                productPictures={productPictures}
                handleProductImage={handleProductImage}
                createCategoriesList={createCategoriesList}
                handleClose={handleNewProduct}
            />
        </div>
    )
}
