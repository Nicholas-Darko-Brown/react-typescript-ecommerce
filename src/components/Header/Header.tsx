import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsCart, BsEye } from 'react-icons/bs'
import "../../styles/Header.css"
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
import { CgProfile } from "react-icons/cg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import axios from 'axios';


const Header = () => {

  let checkLogin = localStorage.getItem('login');
  
  let navigate = useNavigate()
  const { openCart, cartQuantity, cartItems } = useShoppingCart();
  const [show, setShow] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  //const [checkLogin, setCheckLogin] = useState(false);

  
  const handleClose = () => {
    setShow(false);
    setError(false)
  };
  const URL = process.env.BACKEND_URL || "http://localhost:5000/" //"https://witfitminds.herokuapp.com/" //
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    axios.post(`${URL}api/login`, { email, password }).then(res => {
      if(res.data.status){
        setShow(false)
      localStorage.setItem('login',res.data.status)
      }else{
        setError(true)
      }
    }).catch(err => {
        console.log(err);
        
    })

  }

  const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    axios.delete(`${URL}api/logout`).then(res => {
      if(res.data.status){
        localStorage.removeItem('login');
        navigate('/store')
      }
    }).catch(err => {
      //this is just for testing remove when logout is working
      localStorage.removeItem('login')
        navigate('/store')
        
    })

  }
  const handleShow = () => setShow(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}><Badge bg="secondary">mothercare</Badge></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/store" as={NavLink} >Store</Nav.Link>
            <Nav.Link to="/contact" as={NavLink}>Contact us</Nav.Link>
          </Nav>

          <Nav className='cart'>
            <div className="">
              {checkLogin?<Button className='sign-out' onClick={handleLogOut}> LogOut</Button>:<Button className='profile' onClick={handleShow}> <CgProfile /> Login</Button>}

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                  
                </Modal.Header>
                <Modal.Body>
                { error ?<p className='text-danger'>incorrect email or password</p>: ''}
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        name="password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="************"
                        onChange={(e) => setPassword(e.target.value)}
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
                  <Button variant="primary" onClick={(e) => handleLogin(e)}>
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