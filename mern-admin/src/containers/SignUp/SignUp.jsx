import { Input } from '../../components/Common/Input/Input'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'

export const SignUp = () => {
    return (
        <Container>
             <Row style={{ marginTop: '50px'}} className='fs-5 d-flex justify-content-start'>
                 <Col md={{ span: 6, offset: 3 }} >
                 <Form>
                 <Row>
                <Col>
                <Input 
                          label='FirstName'
                          type='text'
                          placeholder='Enter your FirstName'
                          value='FirstName'
                          onChange={() => {}}
                />
                </Col>
                <Col>
                <Input 
                          label='LastName'
                          type='text'
                          placeholder='Enter your LastName'
                          value='LastName'
                          onChange={() => {}}
                />
                </Col>
            </Row>
                        <Input 
                          label='E-mail'
                          type='email'
                          placeholder='Enter your E-mail'
                          value='Email'
                          onChange={() => {}}
                      />
                        <Input 
                          label='Password'
                          type='password'
                          placeholder='Enter your Password'
                          value='Password'
                          onChange={() => {}}
                      />
  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>

  <Button variant="primary" type="submit" className='m-1 fs-5'>
    Submit
  </Button>
</Form>
                 </Col>
             </Row>
        </Container>
    )
}
