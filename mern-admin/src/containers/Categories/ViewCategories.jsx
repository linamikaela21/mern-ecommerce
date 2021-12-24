import { Col, Container, Row, Button } from "react-bootstrap"
import { Input } from '../../components/Common/Input/Input'
import { UseModal } from "../../components/Common/UseModal/UseModal"

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

      <UseModal
        show={props.show}
        setShow={props.setShow}
        handleClose={props.handleClose}
        modalTitle={`Add New Category`}
      >
        <form>
          <Input
            label={'Category Name'}
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
            label={'Category Pictures'}
            value={props.categoryPicture}
            placeholder={'Category Pictures'}
            onChange={e => props.handleCategoryPicture(e)}
          />
        </form>
      </UseModal>

    </Container>

  )
}
