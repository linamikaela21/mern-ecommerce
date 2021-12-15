import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCategory, getAllCategories } from "../../redux/actions/category.actions"
import { ViewCategories } from "./ViewCategories"

export const Categories = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    const category = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    const [categoryName, setCategoryName] = useState('')
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [categoryImage, setCategoryImage] = useState('')

    const renderCategories = (categories) => {
        let myCategories = []
        categories.forEach(cat => {
            myCategories.push(
                <li key={cat.name}>
                    {cat.name}
                    {cat.subCat.length > 0 ?
                        (<ul> {renderCategories(cat.subCat)} </ul>)
                        : null
                    }
                </li>
            )
        })
        return myCategories
    }

    const createCategoriesList = (categories, options = []) => {
        for (let cat of categories) {
            options.push({ value: cat._id, name: cat.name })
            if (cat.subCat.length > 0) createCategoriesList(cat.subCat, options)
        }
        return options
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0])
    }

    const handleNewCategory = () => {
        
        const form = new FormData()

        //const cat = { categoryName, parentCategoryId, categoryImage }

        form.append('name', categoryName)
        form.append('parentId', parentCategoryId)
        form.append('categoryPicture', categoryImage)

        console.log(categoryName, parentCategoryId, categoryImage)

        dispatch(addCategory(form))

        setShow(false)

        setCategoryName('')
        setParentCategoryId('')
        setCategoryImage('')
    }

    return (
        <div>
            <ViewCategories
                category={category}
                renderCategories={renderCategories}
                createCategoriesList={createCategoriesList}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                parentCategoryId={parentCategoryId}
                setParentCategoryId={setParentCategoryId}
                categoryImage={categoryImage}
                handleCategoryImage={handleCategoryImage}
                handleNewCategory={handleNewCategory}
                show={show}
                setShow={setShow}
            />
        </div>
    )
}
