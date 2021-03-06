import { Input } from "../../../components/Common/Input/Input"
import { UseModal } from "../../../components/Common/UseModal/UseModal"

export const AddCategoriesModal = (props) => {

  const {
    show,
    setShow,
    handleClose,
    modalTitle,
    size,
    categoryName,
    setCategoryName,
    parentCategoryId,
    setParentCategoryId,
    categoryType,
    setCategoryType,
    categoryPicture,
    handleCategoryPicture,
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
      <form>
        <Input
          label={'Category Name'}
          value={categoryName}
          placeholder={'Category Name'}
          onChange={e => setCategoryName(e.target.value)}
        />
        <select className="form-control"
          value={parentCategoryId}
          onChange={e => setParentCategoryId(e.target.value)}
        >
          <option>Select Category</option>
          {
            categoryList.map(option =>
              <option key={option.value} value={option.value}> {option.name} </option>
            )
          }
        </select>
        <br />
          <select className="form-control"
            value={categoryType}
            onChange={e => setCategoryType(e.target.value)}
          >
            <option value=''>Select Type</option>
            <option value='store'>Store</option>
            <option value='product'>Product</option>
            <option value='page'>Page</option>
          </select>
          <br />
        <Input
          label={'Category Pictures'}
          value={categoryPicture}
          placeholder={'Category Pictures'}
          onChange={e => handleCategoryPicture(e)}
        />
      </form>
    </UseModal >
  )
}
