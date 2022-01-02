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
    const [banner, setBanner] = useState([])
    const [product, setProduct] = useState([])

    const category = useSelector(state => state.categories.categories)

    useEffect(() => {
        setcategories(createCategoriesList(category))
    }, [category])

    const handleBanners = e => {
        setProduct(e.target.value)
    }

    const handleProductPictures = e => {
        setBanner(e.target.value)
    }

    const renderNewPageModal = () => {
        return (
            <UseModal
                show={showPageModal}
                setShow={setShowPageModal}
                handleClose={() => setShowPageModal(false)}
                modalTitle={`Create a New Page`}
                size='md'
            >
                <Container>
                    <Row>
                        <Col>
                            <select
                                className="form-control"
                                value={categoryId}
                                onChange={e => setCategoryId(e.target.value)}
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
                    <Row>
                        <Col>
                            <Input
                                value={banner}
                                onChange={e => handleBanners(e)}
                                placeholder={`Page Banner`}
                            >
                            </Input>
                        </Col>
                    </Row>
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
