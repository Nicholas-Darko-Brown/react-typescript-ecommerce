import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { BsCart } from 'react-icons/bs'
import "../../styles/Header.css"
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';

const Header = () => {
  const { openCart, cartQuantity, cartItems } = useShoppingCart()

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
         
          <Nav className='cart' onClick={openCart}>
            <div className='cartTotal'>
            {formatCurrency(
                    cartItems.reduce((total, curr) => {
                        return total + curr.price * curr.quantity
                    }, 0)
                    )}
            </div>
            <div className='cartIcon'><BsCart /></div> 
            <div className='cartCounter'> {cartQuantity} </div>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;