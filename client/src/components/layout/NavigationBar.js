import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

export function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3 text-center">
            <Link className='col-lg-4' to={`/`}>Home</Link>
            <Link className='col-lg-4' to={`gallery`}>Gallery</Link>
            <Link className='col-lg-4' to={`about`}>About</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


