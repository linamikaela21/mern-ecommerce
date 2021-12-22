import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCategory, getAllCategories } from "../../redux/actions/category.actions"
import { ViewCategories } from "./ViewCategories"

export const Categories = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    const category = useSelector(state => state.categories)

    const { token } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])

    const [categoryName, setCategoryName] = useState('')
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [categoryPicture, setCategoryPicture] = useState('')

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

    const handleCategoryPicture = (e) => {
        setCategoryPicture(e.target.files[0])
    }

    const handleNewCategory = () => {

        let form = {
            name: categoryName,
            slug: categoryName,
            parentId: parentCategoryId,
            categoryPicture: categoryPicture
        }

        //let form = new FormData()

        //const cat = { categoryName, parentCategoryId, categoryPicture }
        console.log(categoryName, parentCategoryId, categoryPicture)

        // form.append('name', categoryName)
        // form.append('slug', categoryName)
        // form.append('parentId', parentCategoryId)
        // form.append('categoryPicture', categoryPicture)
        dispatch(addCategory(form, token))

        setShow(false)

        setCategoryName('')
        setParentCategoryId('')
        setCategoryPicture('')
    }

    return (
        <div>
            <ViewCategories
                category={category}
                show={show}
                setShow={setShow}
                renderCategories={renderCategories}
                createCategoriesList={createCategoriesList}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                parentCategoryId={parentCategoryId}
                setParentCategoryId={setParentCategoryId}
                categoryPicture={categoryPicture}
                handleCategoryPicture={handleCategoryPicture}
                handleNewCategory={handleNewCategory}
            />
        </div>
    )
}
