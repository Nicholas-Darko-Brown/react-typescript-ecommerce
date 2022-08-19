import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsCart, BsEye } from 'react-icons/bs'
import "../../styles/Header.css"
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const Header = () => {
  const { openCart, cartQuantity, cartItems } = useShoppingCart();
  const [show, setShow] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}><Badge bg="secondary">shopmart</Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/store" as={NavLink} >Store</Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>Contact us</Nav.Link>
          </Nav>
         
          <Nav className='cart'>
            <div className="">
              <Button className='profile' onClick={handleShow}> <CgProfile /> My Account</Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type={passwordShown ? "text" : "password"}
                        placeholder="************"
                        
                      />
                      <span className='show-password' onClick={togglePassword}>Show password <BsEye /> </span>
                    </Form.Group>
                  </Form>
                  <Form.Text className="text-muted">
                    Don't have an account yet? <a className='signUp' href="/profile">Sign Up</a>
                  </Form.Text>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Login
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>

            <div className='cartTotal'>
            {formatCurrency(
                    cartItems.reduce((total, curr) => {
                        return total + curr.price * curr.quantity
                    }, 0)
                    )}
            </div>
            <div className='cartIcon' onClick={openCart}><BsCart /></div> 
            <div className='cartCounter'> {cartQuantity} </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;