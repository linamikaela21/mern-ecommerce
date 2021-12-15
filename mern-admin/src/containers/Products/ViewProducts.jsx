import { Col, Container, Row, Button, Modal } from "react-bootstrap"
import { Input } from '../../components/Common/Input/Input'

export const ViewProducts = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Products</h3>
                    <Button variant="primary" onClick={e => props.setShow(e, true)}>
                        Add Product
                    </Button>
                </Col>
            </Row>

            <Modal show={props.show} onHide={e => props.setShow(e, false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        label={'Product Name'}
                        value={props.name}
                        placeholder={'Product Name'}
                        onChange={e => props.setName(e.target.value)}
                    />
                    <Input
                        label={'Product Quantity'}
                        value={props.quantity}
                        placeholder={'Product Quantity'}
                        onChange={e => props.setQuantity(e.target.value)}
                    />
                    <Input
                        label={'Product Price'}
                        value={props.price}
                        placeholder={'Product Price'}
                        onChange={e => props.setPrice(e.target.value)}
                    />
                    <Input
                        label={'Product Description'}
                        value={props.description}
                        placeholder={'Product Description'}
                        onChange={e => props.setDescription(e.target.value)}
                    />
                    <select className="form-control"
                        value={props.categoryId}
                        onChange={e => props.setCategoryId(e.target.value)}
                    >
                        <option>Select Category</option>
                        {
                            props.createCategoriesList(props.category.categories).map(option =>
                                <option key={option.value} value={option.value}> {option.name} </option>
                            )
                        }
                    </select>
                    {
                        props.productPictures.length > 0 ? 
                        props.productPictures.map((pic, index) => <div key={index}>{pic.name}</div>)
                        : null
                    }
                    <Input
                        name={props.productPictures}
                        type='file'
                        onChange={props.handleProductImage}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleNewProduct}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>

    )
}
