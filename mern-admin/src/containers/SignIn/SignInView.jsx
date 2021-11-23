import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import { Input } from '../../components/Common/Input/Input'

export const SignInView = (props) => {

  return (
    <Container>
      <Row style={{ marginTop: '50px' }} className='fs-5 d-flex justify-content-start'>
        <Col md={{ span: 6, offset: 3 }} >

          <Form onSubmit={props.userLogIn}>

            <Input
              label='E-mail'
              type='email'
              placeholder='Enter your E-mail'
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
            <Input
              label='Password'
              type='password'
              placeholder='Enter your Password'
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
            />

            {/* <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group> */}

            <Button variant="primary" type="submit" className='m-1 fs-5'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
