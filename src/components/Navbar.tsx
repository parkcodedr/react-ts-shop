import React from 'react'
import { Button, Container, Dropdown, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart,FaRegUser } from 'react-icons/fa';
import {FiShoppingBag} from 'react-icons/fi'
import { useShoppingCart } from '../context/shoppingCartContext';

export  function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart();

  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3' expand="lg">
        <Container >
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
       <Nav className="me-auto">
       <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
       <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
       <Nav.Link to="/" as={NavLink}>About</Nav.Link>
       </Nav>

       <div className='d-sm-flex d-xm-flex'>
       <Dropdown className='me-3 px-3' align="end">
        <Dropdown.Toggle variant="primary" id="auth">
          <FaRegUser /> {' '}
          Account
        </Dropdown.Toggle>

  <Dropdown.Menu >
    
      <div className='px-2'>
      <Button variant='primary' className='w-100'>SIGN IN</Button>
      </div>
    
    <Dropdown.Divider />
    <Dropdown.Item href="/dashboard"><FaRegUser /> {' '} My Account</Dropdown.Item>
    <Dropdown.Item href="/orders"><FiShoppingBag /> Orders</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
       {cartQuantity>0 && 
       <Button className='rounded-circle mt-sm-1'
       onClick={openCart}
       variant='outline-primary' style={{width:"2.5rem",height:"2.5rem",position:"relative"}}
       >
        <FaShoppingCart size={'3x'} />
        
        <div className='rounded-circle bg-danger text-white d-flex justify-content-center
        align-items-center'
        style={{width:"1.5rem",height:"1.5rem",
        position:"absolute",bottom:"0",right:"0", 
        transform:"translate(25%, 25%)"}}
        >
         {cartQuantity}
        </div>
        
       </Button>
       }


       </div>
       </NavbarBs.Collapse>
        </Container>
    </NavbarBs>
  )
}
