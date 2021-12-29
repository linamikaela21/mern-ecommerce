import { Col, Row } from "react-bootstrap"
import { UseModal } from "../../../components/Common/UseModal/UseModal"

export const UpdateCategoriesModal = (props) => {

  const {
    show,
    setShow,
    handleClose,
    modalTitle,
    size,
    expandedArray,
    handleCategoryUpdateInput,
    checkedArray,
    categoryList
  } = props

  return (
    <UseModal
      show={show}
      setShow={setShow}
      handleClose={handleClose}
      modalTitle={modalTitle}
      size={size}
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
                    categoryList.map(option =>
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
                    categoryList.map(option =>
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