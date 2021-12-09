import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import './Home.css'

export const Home = () => {
    const auth = useSelector(state => state.auth)
    return (
        <div>
            <Container fluid>
                {
                    auth.token === null ?
                        (
                            <Col>
                                <h1 className='d-flex justify-content-center'>Welcome !</h1>
                                <h6 className='d-flex justify-content-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit illum! Delectus quis laudantium similique sint odio expedita tenetur tempore modi, error sunt nisi architecto quidem quaerat? Eaque, eligendi rem.</h6>
                            </Col>
                        ) :
                        (

                            <Row>
                                <Col md={2} className='sideBar'>
                                    <li> <NavLink to='/' className='text-decoration-none fs-4'>Home</NavLink></li>
                                    <li> <NavLink to='/products' className='text-decoration-none fs-4'>Products</NavLink></li>
                                    <li> <NavLink to='/products' className='text-decoration-none fs-4'>Orders</NavLink></li>
                                </Col>
                                <Col md={10} style={{ marginLeft: 'auto' }}>Container</Col>
                            </Row>
                        )
                }
            </Container>
        </div>
    )
}
