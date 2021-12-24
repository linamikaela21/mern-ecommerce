import { ViewMenuHeader } from "./ViewMenuHeader"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories } from '../../redux/actions'

export const MenuHeader = () => {

    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories.categories)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch]);

    const renderCategories = categories => {
        let myCategories = []
        categories.forEach(cat => {
            myCategories.push(
                <li key={cat.name}>
                    {
                        cat.parentId ? <a href={cat.slug}>{cat.name}</a>
                        : <h4>{cat.name}</h4>
                    }
                    {cat.subCat.length > 0 ?
                        (<ul> {renderCategories(cat.subCat)} </ul>)
                        : null
                    }
                </li>
            )
        })
        return myCategories
    }

    return (
        <div>
            <ViewMenuHeader 
           renderCategories={renderCategories} 
           categories={categories}
            />
        </div>
    )
}
