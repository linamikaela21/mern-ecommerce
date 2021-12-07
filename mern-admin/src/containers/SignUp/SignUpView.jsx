import { Input } from '../../components/Common/Input/Input'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'

export const SignUpView = (props) => {

  return (
    <Container>
      <Row style={{ marginTop: '50px' }} className='fs-5 d-flex justify-content-start'>
        <Col md={{ span: 6, offset: 3 }} >
          <Form onSubmit={props.signup}>
            <Row>
              <Col>
                <Input
                  label='FirstName'
                  type='text'
                  placeholder='Enter your FirstName'
                  value={props.firstName}
                  onChange={(e) => props.setFirstName(e.target.value)}
                />
              </Col>
              <Col>
                <Input
                  label='LastName'
                  type='text'
                  placeholder='Enter your LastName'
                  value={props.lastName}
                  onChange={(e) => props.setLastName(e.target.value)}
                />
              </Col>
            </Row>
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
            <Input
              label='Role'
              type='text'
              placeholder='Enter your Role'
              value={props.role}
              onChange={(e) => props.setRole(e.target.value)}
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
