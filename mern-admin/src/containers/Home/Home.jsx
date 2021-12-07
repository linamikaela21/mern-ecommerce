import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './Home.css'

export const Home = () => {
    return (
        <div>
            <Container fluid>
            <Row>
                <Col md={2} className='sideBar'>
                    <li> <NavLink to='/' className='w-75 text-decoration-none d-flex flex-start fs-1'>Home</NavLink></li>
                    <li> <NavLink to='/products' className='w-75 text-decoration-none d-flex flex-start fs-1'>Products</NavLink></li>
                    <li> <NavLink to='/products' className='w-75 text-decoration-none d-flex flex-start fs-1'>Orders</NavLink></li>
                </Col>
                <Col md={10} style={{marginLeft:'auto'}}>Container</Col>
            </Row>
        </Container>
        </div>
    )
}
