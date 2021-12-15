import { Col, Container, Row, Button, Modal } from "react-bootstrap"
import { Input } from '../../components/Common/Input/Input'

export const ViewCategories = (props) => {

  return (
    <Container>
      <Row>
        <Col>
          <h3>Categories</h3>
          <Button variant="primary" onClick={e => props.setShow(e, true)}>
            Add Category
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {props.renderCategories(props.category.categories)}
            {/* {JSON.stringify(props.createCategoriesList(props.category.categories))} */}
          </ul>
        </Col>
      </Row>


      <Modal show={props.show} onHide={e => props.setShow(e, false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={props.categoryName}
            placeholder={'Category Name'}
            onChange={e => props.setCategoryName(e.target.value)}
          />
          <select className="form-control" 
          value={props.parentCategoryId}
          onChange={e => props.setParentCategoryId(e.target.value)}
          >
            <option>Select Category</option>
            {
              props.createCategoriesList(props.category.categories).map(option =>
                <option key={option.value} value={option.value}> {option.name} </option>
              )
            }
          </select>
          <Input
            name={props.categoryImage}
            type='file'
            onChange={props.handleCategoryImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleNewCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </Container>

  )
}
