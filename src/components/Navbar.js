import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarCustom() {
  return (
    <Navbar bg='primary' expand='lg' variant='primary'>
      <Container>
        <NavLink className='navbar-brand' to='/vk-app/'>
          <img
            alt='logo'
            className='img-thumbnail'
            src='assets/img/logo.png'
            width='40'
          />
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='w-100'>
            <NavLink className='nav-link' to='/vk-app/' exact>
              Home
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
