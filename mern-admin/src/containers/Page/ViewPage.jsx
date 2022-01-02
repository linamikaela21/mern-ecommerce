import { useEffect } from "react"
import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Input } from "../../components/Common/Input/Input"
import { UseModal } from "../../components/Common/UseModal/UseModal"
import createCategoriesList from "../../helpers/createCategoryList"

export const ViewPage = () => {

    const [showPageModal, setShowPageModal] = useState(false)
    const [title, setTitle] = useState('')
    const [categories, setcategories] = useState([])
    const [categoryId, setCategoryId] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [banner, setBanner] = useState([])
    const [product, setProduct] = useState([])

    const category = useSelector(state => state.categories.categories)

    useEffect(() => {
        setcategories(createCategoriesList(category))
    }, [category])

    const handleBanners = e => {
        setBanner([...banner, e.target.value])
    }

    const handleProductPictures = e => {
        setProduct([...product, e.target.value])
    }

    const onChangeCategory = e => {
        const category = categories.find(cat => cat._id === e.target.value)
        setCategoryId(e.target.value)
        setType(category)
    }

    const handleNewPage = async (e) => {

        e.preventDefault()

        if (title === "") {
            alert('Title is requiered')
            setShowPageModal(false)
            return
        }
        let form = {
            title: title,
            description: description,
            category: categoryId,
            banners: banner,
            products: product
        }

        setShowPageModal(false)

        console.log('FORM => ', form)

        //window.location.reload()
    }

    const renderNewPageModal = () => {
        return (
            <UseModal
                show={showPageModal}
                setShow={setShowPageModal}
                handleClose={e => handleNewPage(e)}
                modalTitle={`Create a New Page`}
                size='md'
            >
                <Container>
                    <Row>
                        <Col>
                            <select
                                className="form-control"
                                value={categoryId}
                                onChange={e => onChangeCategory(e)}
                                placeholder={`Page Title`}
                            >
                                <option>Select Category</option>
                                {
                                    categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)
                                }
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder={`Page Title`}
                            >
                            </Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                placeholder={`Page Description`}
                            >
                            </Input>
                        </Col>
                    </Row>
                    {
                        banner.length > 0 ? banner.map((banner, index) =>
                            <Row key={index}><Col>{banner.name}</Col></Row>
                        ) : null
                    }
                    <Row>
                        <Col>
                            <Input
                                value={banner}
                                onChange={e => handleBanners(e)}
                                placeholder={`Page Banner Image`}
                            >
                            </Input>
                        </Col>
                    </Row>
                    {
                        product.length > 0 ? product.map((product, index) =>
                            <Row key={index}><Col>{product.name}</Col></Row>
                        ) : null
                    }
                    <Row>
                        <Col>
                            <Input
                                value={product}
                                onChange={e => handleProductPictures(e)}
                                placeholder={`Page Products Pictures`}
                            >
                            </Input>
                        </Col>
                    </Row>
                </Container>
            </UseModal>
        )
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            {renderNewPageModal()}
            <Button className="bg-warning" onClick={() => setShowPageModal(true)}>Create New Page</Button>
        </div>
    )
}
