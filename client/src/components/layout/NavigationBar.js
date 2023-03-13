import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as sec from "../";

import { Link } from 'react-router-dom';

export function NavigationBar({logedIn}) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <Navbar bg="body" expand="lg" className='border-bottom p-3'>
      <Container>
        <Navbar.Brand className='fs-4 fw-bold' href="/"><i className="bi bi-palette2 p-2"></i>pixolabAI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3 text-center">
            <Link
            onClick={() => setActiveItem('home')} 
            className={activeItem === 'home' ? 'col-lg-5 text-decoration-none text-dark fs-5 fw-bold'  : 'col-lg-5 text-decoration-none text-dark fs-5'}  
            
            to={`/`}
            >Create Post</Link>
            <Link  
             onClick={() => setActiveItem('gallery')} 
             className={activeItem === 'gallery' ? 'col-lg-5 text-decoration-none text-dark fs-5 fw-bold'  : 'col-lg-5 text-decoration-none text-dark fs-5'}
             to={`gallery`}>Gallery</Link>
            <Link  
            onClick={() => setActiveItem('about')} 
            className={activeItem === 'about' ? 'col-lg-5 text-decoration-none text-dark fs-5 fw-bold'  : 'col-lg-5 text-decoration-none text-dark fs-5'}
            to={`about`}>About</Link>
          </Nav>
          <Nav className=""><sec.UserLogin logedIn={logedIn}/></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


