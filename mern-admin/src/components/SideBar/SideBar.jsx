import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import './SideBar.css'

export const SideBar = () => {
    const auth = useSelector(state => state.auth)
    return (
        <div>
            <Container fluid>
                {
                    auth.token === null ? null
                        :
                        (
                            <Row>
                                <Col md={2} className='sideBar'>
                                    <ul>
                                        <li> <NavLink to='/' className='text-decoration-none fs-4'>Home</NavLink></li>
                                        <li> <NavLink to='/pages' className='text-decoration-none fs-4'>Pages</NavLink></li>
                                        <li> <NavLink to='/categories' className='text-decoration-none fs-4'>Categories</NavLink></li>
                                        <li> <NavLink to='/products' className='text-decoration-none fs-4'>Products</NavLink></li>
                                        <li> <NavLink to='/orders' className='text-decoration-none fs-4'>Orders</NavLink></li>
                                    </ul>
                                </Col>
                            </Row>
                        )
                }
            </Container>
        </div>
    )
}
