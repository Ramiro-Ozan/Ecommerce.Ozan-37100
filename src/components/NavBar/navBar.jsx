import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/navbar';
import Cartwidget from './Cartwidget/cartwidget';
import './navBarStyle.css'

/*NavBar of my E-commerce*/ 
const NavBar = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Container>
                    <Link to='/' className='m-1 majorLink'>Ecommerce OZAN</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/category/shirts' className='m-1 link'>Shirts</NavLink>
                        <NavLink to='/category/boots' className='m-1 link'>Boots</NavLink>
                        <NavLink to='/category/perfume' className='m-1 link'>Perfumes</NavLink>
                    </Nav>
                        <NavLink to='/cart'>
                            <Cartwidget />
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar