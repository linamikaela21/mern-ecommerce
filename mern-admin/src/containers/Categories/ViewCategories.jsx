import { Col, Container, Row, Button } from "react-bootstrap"
import { UseModal } from "../../components/Common/UseModal/UseModal"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import CheckboxTree from 'react-checkbox-tree'
import 'react-checkbox-tree/lib/react-checkbox-tree.css'
import { BsCheckSquareFill, BsCheckSquare, BsFillArrowDownSquareFill, BsFillArrowRightSquareFill, BsTrash } from 'react-icons/bs'
import { BiEdit, BiMessageAdd } from 'react-icons/bi'
import { updateCategories, getAllCategories, deleteCategoriesAction } from "../../redux/actions"
import { UpdateCategoriesModal } from "./components/UpdateCategoriesModal"
import { AddCategoriesModal } from "./components/AddCategoriesModal"

export const ViewCategories = (props) => {
  
  const dispatch = useDispatch()
  
  const [expanded, setExpanded] = useState([])
  const [checked, setChecked] = useState([])
  const [checkedArray, setCheckedArray] = useState([])
  const [expandedArray, setExpandedArray] = useState([])
  const [updateCategoriesModal, setUpdateCategoriesModal] = useState(false)
  
  const [deleteCategoriesModal, setDeleteCategoriesModal] = useState(false)
  
  const categoryList = props.createCategoriesList(props.category.categories)

  const updateCategory = () => {
    updateCheckedAndExpandedCategories()
    setUpdateCategoriesModal(true)
  }

  const updateCheckedAndExpandedCategories = () => {
    const categories = categoryList
    const checkedArray = []
    const expandedArray = []
    checked.length > 0 && checked.forEach((catId) => {
      const category = categories.find((category, _index) => catId === category.value)
      category && checkedArray.push(category)
    })
    expanded.length > 0 && expanded.forEach((catId) => {
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

  const updateCategoriesForm = () => {

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

    setUpdateCategoriesModal(false)
  }

  const deleteCategory = () => {
    updateCheckedAndExpandedCategories()
    setDeleteCategoriesModal(true)
  }

  const deleteCategories = () => {
    const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }))

    if (checkedIdsArray.length > 0) {
      dispatch(deleteCategoriesAction(checkedIdsArray))
        .then(result => {
          if (result) dispatch(getAllCategories())
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
        {expandedArray.map((item, index) => <span key={index}>{item.name}</span>)}

        <h5>Checked</h5>
        {checkedArray.map((item, index) => <span key={index}>{item.name}</span>)}

      </UseModal>
    )
  }

  return (
    <Container>
      <Row>
        <Col>
        <Row>
          <Col className="m-3 p-2">
          <h2>Categories</h2>
          <Button variant="primary" className="m-3 p-2 fs-5" onClick={e => props.setShow(e, true)}>
          <BiMessageAdd size={30} /><span>Add Category</span>
          </Button>
            <Button variant="danger" className="m-3 p-2 fs-5" onClick={() => deleteCategory(true)}>
            <BsTrash size={30} /><span>Delete Category</span>
            </Button>
            <Button variant="info" className="m-3 p-2 fs-5" onClick={() => updateCategory(true)}>
            <BiEdit size={30} /><span>Edit Category</span>
            </Button>
          </Col>
        </Row>
         {/* {JSON.stringify(props.createCategoriesList(props.category.categories))} */}
          <CheckboxTree
            nodes={props.renderCategories(props.category.categories)}
            checked={checked}
            expanded={expanded}
            onCheck={checked => setChecked(checked)}
            onExpand={expanded => setExpanded(expanded)}
            icons={{
              check: <BsCheckSquareFill size={30} />,
              uncheck: <BsCheckSquare size={30} />,
              halfCheck: <BsCheckSquare size={30} />,
              expandClose: <BsFillArrowRightSquareFill size={30} />,
              expandOpen: <BsFillArrowDownSquareFill size={30} />
            }}
          />
        </Col>
      </Row>

      <AddCategoriesModal
        show={props.show}
        setShow={props.setShow}
        handleClose={props.handleClose}
        modalTitle={`Add New Category`}
        size='md'
        categoryName={props.categoryName}
        setCategoryName={props.setCategoryName}
        parentCategoryId={props.parentCategoryId}
        setParentCategoryId={props.setParentCategoryId}
        categoryPicture={props.categoryPicture}
        handleCategoryPicture={props.handleCategoryPicture}
        categoryList={categoryList}
      />

      {/* Edit Categories */}
      <UpdateCategoriesModal
        show={updateCategoriesModal}
        setShow={setUpdateCategoriesModal}
        handleClose={updateCategoriesForm}
        modalTitle={`Update Categories`}
        size='lg'
        expandedArray={expandedArray}
        handleCategoryUpdateInput={handleCategoryUpdateInput}
        checkedArray={checkedArray}
        categoryList={categoryList}
      />

      {/* Delete Categories */}
      {renderDeleteCategoriesModal()}

    </Container>
  )
}