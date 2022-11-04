import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    return (
        <Navbar expand="lg" className='bg-primary'>
            <Container>
                <NavLink to="/" className='text-white text-decoration-none'>LOGO</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/products" className='text-white text-decoration-none me-3'>Products</NavLink>

                        <NavLink to="/about" className='text-white text-decoration-none me-3'>About</NavLink>

                        <NavLink to="/contact" className='text-white text-decoration-none me-3'>Contact</NavLink>

                        <NavLink to="/cart" className='text-white text-decoration-none me-3'>
                            <FiShoppingCart />
                            <span>10</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;