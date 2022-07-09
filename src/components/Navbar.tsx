import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import { FaShoppingCart } from 'react-icons/fa';

export  function Navbar() {
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container >
       <Nav className="me-auto">
       <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
       <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
       <Nav.Link to="/" as={NavLink}>About</Nav.Link>
       </Nav>
       <Button className='rounded-circle'
       variant='outline-primary' style={{width:"3rem",height:"3rem",position:"relative"}}
       >
        <FaShoppingCart size={'3x'} />
        <div className='rounded-circle bg-danger text-white d-flex justify-content-center
       align-items-center'
       style={{width:"1.5rem",height:"1.5rem",
       position:"absolute",bottom:"0",right:"0", 
       transform:"translate(25%, 25%)"}}
       >3</div>
       </Button>
       
        </Container>
    </NavbarBs>
  )
}
