import { Col, Container, Row, Button, Table } from "react-bootstrap"
import { Input } from '../../components/Common/Input/Input'
import { UseModal } from "../../components/Common/UseModal/UseModal"

export const ViewProducts = (props) => {

    const renderProducts = () => {
        return (
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.products.length > 0 ?
                            (props.products.map(prod => {
                                return (
                                    <tr>
                                        <td>{prod._id}</td>
                                        <td>{prod.name}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.quantity}</td>
                                        <td>{prod.description}</td>
                                        <td>{'---'}</td>
                                    </tr>
                                )
                            })) : null
                    }
                </tbody>
            </Table>
        )
    }
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

            <Row>
                <Col>
                    {renderProducts()}
                </Col>
            </Row>

            <UseModal
                show={props.show}
                setShow={props.setShow}
                handleClose={props.handleClose}
                modalTitle={`Add New Category`}
            >
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

                <Input
                    label={'Product Pictures'}
                    value={props.img}
                    placeholder={'Product Pictures'}
                    onChange={e => props.addImg(e)}
                />
                <div className='text-success'>
                    {
                        props.productPictures?.length > 0 ?
                            props.productPictures.map((pic, index) => <p key={index}>{pic}</p>)
                            : null
                    }
                </div>
                <div className='d-flex justify-content-center'>
                    <Button
                        variant="success"
                        onClick={e => props.handleProductImage(e)}> Add Image</Button>
                </div>
            </UseModal>

        </Container>
    )
}
