import { Col, Container, Row, Button } from "react-bootstrap"
import { Input } from '../../components/Common/Input/Input'
import { UseModal } from "../../components/Common/UseModal/UseModal"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import CheckboxTree from 'react-checkbox-tree'
import 'react-checkbox-tree/lib/react-checkbox-tree.css'
import { BsCheckSquareFill, BsCheckSquare, BsFillArrowDownSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { updateCategories, getAllCategories, deleteCategoriesAction } from "../../redux/actions"

export const ViewCategories = (props) => {

  const dispatch = useDispatch()

  const [expanded, setExpanded] = useState([])
  const [checked, setChecked] = useState([])
  const [checkedArray, setCheckedArray] = useState([])
  const [expandedArray, setExpandedArray] = useState([])
  const [updateCategoriesModal, setUpdateCategoriesModal] = useState(false)

  const [deleteCategoriesModal, setDeleteCategoriesModal] = useState(false)

  const updateCategory = () => {
    updateCheckedAndExpandedCategories()
    setUpdateCategoriesModal(true)
  }

  const updateCheckedAndExpandedCategories = () => {
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

  const renderAddCategoriesModal = () => {
    return (
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
    )
  }

  const updatdeCategoriesForm = () => {

    let form = {
      _id: '',
      name: '',
      parentId: '',
      type: ''
    }

    expandedArray.forEach((item, index) => {
      form = {
        _id: item.value,
        name: item.name,
        parentId: item.parentId ? item.parentId : '',
        type: item.type
      }
    })

    checkedArray.forEach((item, index) => {
      form = {
        _id: item.value,
        name: item.name,
        parentId: item.parentId ? item.parentId : '',
        type: item.type
      }
    })

    dispatch(updateCategories(form))
      .then(result => {
        if (result) dispatch(getAllCategories())
      })

    setUpdateCategoriesModal(false)
  }

  const renderUpdateCategoriesModal = () => {
    return (
      <UseModal
        show={updateCategoriesModal}
        setShow={setUpdateCategoriesModal}
        handleClose={updatdeCategoriesForm}
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
    )
  }

  const deleteCategory = () => {
    updateCheckedAndExpandedCategories()
    setDeleteCategoriesModal(true)
  }

  const deleteCategories = () => {
    const checkedIdsArray = checkedArray.map((item, index) => ({_id: item.value}))
    //const expandedIdsArray = expandedArray.map((item, index) => ({_id: item.value}))
    //const idsArray = [...checkedIdsArray, ...expandedIdsArray]
    
    if(checkedIdsArray.length > 0) {
      dispatch(deleteCategoriesAction(checkedIdsArray))
      .then(result => {
        if(result) dispatch(getAllCategories())
        setDeleteCategoriesModal(false)
      })
    }
  }

  const renderDeleteCategoriesModal = () => {
    return (
      <UseModal
        show={deleteCategoriesModal}
        setShow={setDeleteCategoriesModal}
        handleClose={() => setDeleteCategoriesModal(false)}
        modalTitle={`Confirm`}
        buttons={[
          {
            label: 'Yes',
            color: 'success',
            onClick: deleteCategories
          },
          {
            label: 'No',
            color: 'danger',
            onClick: () => alert('No')
          }
        ]}
      >
        <h5>Expanded</h5> 
        { expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}

        <h5>Checked</h5> 
        { checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}

      </UseModal>
    )
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
            <Button variant="danger" onClick={() => deleteCategory(true)}>
              Delete Category
            </Button>
            <Button variant="info" onClick={() => updateCategory(true)}>
              Edit Category
            </Button>
          </Col>
        </Row>
      </Row>

      {renderAddCategoriesModal()}

      {/* Edit Categories */}
      {renderUpdateCategoriesModal()}

      {/* Delete Categories */}
      {renderDeleteCategoriesModal()}

    </Container>

  )
}
