import { Form, Col, Row, Button, Container } from 'react-bootstrap'

export const SignIn = () => {
    return (
        <Container className='fs-5'>
             <Row lg={8} className='d-flex justify-content-center m-5'>
                 <Col lg={8}>
                 <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset >
    <Form.Group as={Row} className="d-flex justify-content-start mb-3">
      <Form.Label as="legend" column sm={2} >
        Role
      </Form.Label>
      <Col sm={10} className="d-flex justify-content-around w-50">
        <Form.Check
          type="radio"
          label="Admin"
          name="formHorizontalRadios"
          id="admin"
          className="p-2"
        />
        <Form.Check
          type="radio"
          label="User"
          name="formHorizontalRadios"
          id="user"
          className="p-2"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }} className="mb-3 d-flex justify-content-start">
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit" className="f-5">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
                 </Col>
             </Row>
        </Container>
    )
}
