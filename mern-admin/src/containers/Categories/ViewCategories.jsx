import { Col, Container, Row, Button } from "react-bootstrap"
import { Input } from '../../components/Common/Input/Input'
import { UseModal } from "../../components/Common/UseModal/UseModal"
import { useState } from "react"
import CheckboxTree from 'react-checkbox-tree'
import 'react-checkbox-tree/lib/react-checkbox-tree.css'
import { BsCheckSquareFill, BsCheckSquare, BsFillArrowDownSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

export const ViewCategories = (props) => {

  const [expanded, setExpanded] = useState([])
  const [checked, setChecked] = useState([])
  const [checkedArray, setCheckedArray] = useState([])
  const [expandedArray, setExpandedArray] = useState([])
  const [updateCategoriesModal, setUpdatdeCategoriesModal] = useState(false)


  const updateCategory = () => {
    setUpdatdeCategoriesModal(true)
    const categories = props.createCategoriesList(props.category.categories)
    const checkedArray = []
    const expandedArray = []
    checked.length > 0 && checked.forEach((catId, index) => {
      const category = categories.find((category, _index) => catId === category.value)
      category && checkedArray.push(category)
    })
    expanded.length > 0 && expanded.forEach((catId, index) => {
      const category = categories.find((category, _index) => catId === category.value)
      category && expandedArray.push(category)
    })
    setCheckedArray(checkedArray)
    setExpandedArray(expandedArray)
  }

  const handleCategoryUpdateInput = (key, value, index, type) => {
    if (type === 'checked') {
      const updateCkeckedArray = checkedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item)
      setCheckedArray(updateCkeckedArray)
    } else if (type === 'expanded') {
      const updateExpandedArray = expandedArray.map((item, _index) => index === _index ? { ...item, [key]: value } : item)
      setExpandedArray(updateExpandedArray)
    }
  }

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
          {/* <ul>
            {props.renderCategories(props.category.categories)}
            {/* {JSON.stringify(props.createCategoriesList(props.category.categories))} 
          </ul> */}
          <CheckboxTree
            nodes={props.renderCategories(props.category.categories)}
            checked={checked}
            expanded={expanded}
            onCheck={checked => setChecked(checked)}
            onExpand={expanded => setExpanded(expanded)}
            icons={{
              check: <BsCheckSquareFill />,
              uncheck: <BsCheckSquare />,
              halfCheck: <BsCheckSquare />,
              expandClose: <BsFillArrowRightSquareFill />,
              expandOpen: <BsFillArrowDownSquareFill />
            }}
          />
        </Col>
        <Row>
          <Col>
            <Button variant="danger" onClick={() => { '' }}>
              Delete Category
            </Button>
            <Button variant="info" onClick={() => updateCategory(true)}>
              Edit Category
            </Button>
          </Col>
        </Row>
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

      {/* Edit Categories */}

      <UseModal
        show={updateCategoriesModal}
        setShow={setUpdatdeCategoriesModal}
        handleClose={() => setUpdatdeCategoriesModal(false)}
        modalTitle={`Update Categories`}
        size='lg'
      >
        <Row className="p-1"><h5>Expanded</h5></Row>
        {
          expandedArray.length > 0 &&
          expandedArray.map((item, index) => {
            return (
              <Row key={index}>
                <Col className="m-2">
                  <input className="form-control"
                    label={''}
                    value={item.name}
                    placeholder={'Category Name'}
                    onChange={e => handleCategoryUpdateInput('name', e.target.value, index, 'expanded')}
                  />
                </Col>
                <Col className="m-2">
                  <select className="form-control"
                    value={item.parentCategoryId}
                    onChange={e => handleCategoryUpdateInput('parentCategoryId', e.target.value, index, 'expanded')}
                  >
                    <option>Select Category</option>
                    {
                      props.createCategoriesList(props.category.categories).map(option =>
                        <option key={option.value} value={option.value}> {option.name} </option>
                      )
                    }
                  </select>
                </Col>
                <Col className="m-2">
                  <select className="form-control">
                    <option value=''>Select Type</option>
                    <option value='store'>Store</option>
                    <option value='product'>Product</option>
                    <option value='page'>Page</option>
                  </select>
                </Col>
                {/* <Col>
                    <Input
                      label={'Category Pictures'}
                      value={props.categoryPicture}
                      placeholder={'Category Pictures'}
                      onChange={e => props.handleCategoryPicture(e)}
                    />
                  </Col> */}
              </Row>
            )
          })
        }
        <Row className="p-1"><h5>Checked</h5></Row>
        {
          checkedArray.length > 0 &&
          checkedArray.map((item, index) => {
            return (
              <Row key={index}>
                <Col className="m-2">
                  <input className="form-control"
                    label={''}
                    value={item.name}
                    placeholder={'Category Name'}
                    onChange={e => handleCategoryUpdateInput('name', e.target.value, index, 'checked')}
                  />
                </Col>
                <Col className="m-2">
                  <select className="form-control"
                    value={item.parentCategoryId}
                    onChange={e => handleCategoryUpdateInput('parentCategoryId', e.target.value, index, 'checked')}
                  >
                    <option>Select Category</option>
                    {
                      props.createCategoriesList(props.category.categories).map(option =>
                        <option key={option.value} value={option.value}> {option.name} </option>
                      )
                    }
                  </select>
                </Col>
                <Col className="m-2">
                  <select className="form-control">
                    <option value=''>Select Type</option>
                    <option value='store'>Store</option>
                    <option value='product'>Product</option>
                    <option value='page'>Page</option>
                  </select>
                </Col>
                {/* <Col>
                    <Input
                      label={'Category Pictures'}
                      value={props.categoryPicture}
                      placeholder={'Category Pictures'}
                      onChange={e => props.handleCategoryPicture(e)}
                    />
                  </Col> */}
              </Row>
            )
          })
        }
      </UseModal>

    </Container>

  )
}
