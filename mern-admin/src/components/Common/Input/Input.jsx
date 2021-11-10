import { Form } from 'react-bootstrap'


export const Input = (props) => {
    return (
        <>
    <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label> {props.label} </Form.Label>
    <Form.Control 
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
     />
    <Form.Text className="text-muted">
      {props.errorMenssage}
    </Form.Text>
  </Form.Group>
        </>
    )
}
