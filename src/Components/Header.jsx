import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
       <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home" className='text-white'>
          <i className="fa-regular fa-user fa-lg"></i>{' '}
            Employee-Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header