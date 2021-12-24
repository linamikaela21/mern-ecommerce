import { Button, Modal } from "react-bootstrap"

export const UseModal = (props) => {
  return (
    <Modal show={props.show} onHide={e => props.setShow(e, false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
