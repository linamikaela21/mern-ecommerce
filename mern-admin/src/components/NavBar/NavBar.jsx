import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/actions/auth.actions'

export const NavBar = () => {

  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logOut())
    
  }

  const loggedLinks = () => {
    return (
    <Nav className='d-flex flex-end fs-5'>
      <li className='nav-item'>
        <NavLink to='/' className='nav-link text-white text-decoration-none p-3'>
          <span onClick={logout}>Singout</span>
        </NavLink>
      </li>
    </Nav>
    )
  }

  const loggedNoLinks = () => {
    return (
    <Nav className='d-flex flex-end fs-5'>
      <li className='nav-item' key='signin'><NavLink to='/signin' className='nav-link text-white text-decoration-none p-3'>SingIn </NavLink></li>
      <li className='nav-item' key='signup'><NavLink to='/signup' className='nav-link text-white text-decoration-none p-3'>SingUp</NavLink></li>
    </Nav>
    )
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
        <Container>
          <NavLink to='/' className='w-75 text-decoration-none d-flex flex-start fs-1'><Navbar.Brand className='fs-1'>Admin DashBoard</Navbar.Brand></NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
              {auth.authenticate ? loggedLinks() : loggedNoLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
