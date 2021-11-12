import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

export const NavBar = () => {
    return (
        <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavLink to='/' className='w-75 text-decoration-none d-flex flex-start fs-1'><Navbar.Brand className='fs-1'>Admin DashBoard</Navbar.Brand></NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
    <Nav className='d-flex flex-end fs-5'>
        <li className='nav-item' key='signin'><NavLink to='/signin' className='nav-link text-white text-decoration-none p-3'>Sing in </NavLink></li>
        <li className='nav-item' key='signup'><NavLink to='/signup' className='nav-link text-white text-decoration-none p-3'>Sing up</NavLink></li>
    </Nav>
  </Navbar.Collapse> 
  </Container>
</Navbar> 
        </>
    )
}
