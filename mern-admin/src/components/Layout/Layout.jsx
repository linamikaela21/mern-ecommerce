import { Container, Row, Col } from "react-bootstrap"
import './Layout.css'

export const Layout = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={2} className='sideBar'>SideBar</Col>
                <Col md={10} style={{marginLeft:'auto'}}>Container</Col>
            </Row>
        </Container>
    )
}
