import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCart, BsEye } from "react-icons/bs";
import "../../styles/Header.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CgProfile } from "react-icons/cg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import axios from "axios";
import { BiHide } from "react-icons/bi";
import { api } from "../../services/api";
import Logo from "../../assets/logo.png"

const Header = () => {
  let checkLogin = localStorage.getItem("login");

  let navigate = useNavigate();
  const { openCart, cartQuantity, cartItems } = useShoppingCart();
  const [show, setShow] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  //const [checkLogin, setCheckLogin] = useState(false);

  const handleClose = () => {
    setShow(false);
    setError(false);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    api()
      .post(`login`, { email, password })
      .then((res) => {
        if (res.data.status) {
          setShow(false);
          localStorage.setItem("login", res.data.status);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    api()
      .delete(`logout`)
      .then((res) => {
        if (res.data.status) {
          localStorage.removeItem("login");
          navigate("/store");
        }
      })
      .catch((err) => {
        //this is just for testing remove when logout is working
        localStorage.removeItem("login");
        navigate("/store");
      });
  };
  const handleShow = () => setShow(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    // <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: "999" }}>
    //   <Container>
    //     <Navbar.Brand to="/" as={NavLink}><Badge bg="secondary">mothercare</Badge></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link to="/store" as={NavLink} >Store</Nav.Link>
    //         <Nav.Link to="/contact" as={NavLink}>Contact us</Nav.Link>
    //       </Nav>

    //       <Nav className='cart'>
    //         <div className="">
    //           {checkLogin?<Button className='sign-out' onClick={handleLogOut}> LogOut</Button>:<Button className='profile' onClick={handleShow}> <CgProfile /> Login</Button>}

    //           <Modal show={show} onHide={handleClose}>
    //             <Modal.Header closeButton>
    //               <Modal.Title>Login</Modal.Title>

    //             </Modal.Header>
    //             <Modal.Body>
    //             { error ?<p className='text-danger'>incorrect email or password</p>: ''}
    //               <Form>
    //                 <Form.Group className="mb-3" controlId="formBasicEmail">
    //                   <Form.Label>Email</Form.Label>
    //                   <Form.Control
    //                     type="email"
    //                     name="email"
    //                     placeholder="name@example.com"
    //                     autoFocus
    //                     onChange={(e) => setEmail(e.target.value)}
    //                   />
    //                 </Form.Group>
    //                 <Form.Group
    //                   className="mb-3"
    //                   controlId="formBasicPassword"
    //                 >
    //                   <Form.Label>Password</Form.Label>
    //                   <Form.Control
    //                     name="password"
    //                     type={passwordShown ? "text" : "password"}
    //                     placeholder="************"
    //                     onChange={(e) => setPassword(e.target.value)}
    //                   />
    //                   <span className='show-password' onClick={togglePassword}>Show password <BsEye /> </span>
    //                 </Form.Group>
    //               </Form>
    //               <Form.Text className="text-muted">

    //                 Don't have an account yet? <a className='signUp' href="/profile">Sign Up</a>
    //               </Form.Text>
    //             </Modal.Body>
    //             <Modal.Footer>
    //               <Button variant="secondary" onClick={handleClose}>
    //                 Close
    //               </Button>
    //               <Button variant="primary" onClick={(e) => handleLogin(e)}>
    //                 Login
    //               </Button>
    //             </Modal.Footer>
    //           </Modal>
    //         </div>

    //         <div className='cartTotal'>
    //           {formatCurrency(
    //             cartItems.reduce((total, curr) => {
    //               return total + curr.price * curr.quantity
    //             }, 0)
    //           )}
    //         </div>
    //         <div className='cartIcon' onClick={openCart}><BsCart /></div>
    //         <div className='cartCounter'> {cartQuantity} </div>
    //       </Nav>

    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
              <header className="sticky top-0 z-50 border-b bg-white py-2 md:py-4">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">

                <Link to="/" style={{ textDecoration: 'none' }}>
                  <h2 className="flex items-center gap-2"> <img src={Logo} className="w-12 h-12" alt="" /> Mothercare</h2>
                </Link>
              </div>

              <div className="flex lg:hidden">
                <button type="button" className="text-gray-900">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
                <div className="flex items-center space-x-12">
                  <Link to={"/store"} style={{ textDecoration: 'none' }}>
                    <span className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Store
                    </span>
                  </Link>

                  <Link to={"/contact"} style={{ textDecoration: 'none' }}>
                    <span className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                      Contact
                    </span>
                  </Link>
                </div>

                <div className="w-px h-5 bg-gray-300"></div>

                {checkLogin?<Button className='sign-out' onClick={handleLogOut}> LogOut</Button>:<Button className='profile' onClick={handleShow}> Login</Button>}

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

                {/* {checkLogin ? (
                  <button
                    onClick={handleLogOut}
                    type="button"
                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={handleShow}
                    type="button"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                  >
                    Login
                  </button>
                )} */}

                {/* <div
                  className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                  id="exampleModalCenter"
                  tabIndex={-1}
                  aria-labelledby="exampleModalCenterTitle"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                      <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5
                          className="text-xl font-medium leading-normal text-gray-800"
                          id="exampleModalScrollableLabel"
                        >
                          Sign In
                        </h5>
                        <button
                          type="button"
                          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body relative p-4">
                        <div className="flex justify-center">
                          <div>
                            <div className="form-floating mb-3 xl:w-96">
                              <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="floatingInput"
                                placeholder="name@example.com"
                              />
                              <label
                                htmlFor="floatingInput"
                                className="text-gray-700"
                              >
                                Email address
                              </label>
                            </div>
                            <div className="form-floating mb-3 xl:w-96">
                              <input
                                type={passwordShown ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control
                                  block
                                  w-full
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-700
                                  bg-white bg-clip-padding
                                  border border-solid border-gray-300
                                  rounded
                                  transition
                                  ease-in-out
                                  m-0
                                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="floatingPassword"
                                placeholder="Password"
                              />
                              <label
                                htmlFor="floatingPassword"
                                className="text-gray-700"
                              >
                                Password
                              </label>
                              <button
                                className="show-password text-sm"
                                onClick={togglePassword}
                              >
                                {passwordShown ? <span className="flex items-center gap-2 text-gray-400"> Password shown <BsEye /></span> : <span className="flex items-center gap-2 text-gray-400"> Password hidden <BiHide /></span>}
                              </button>
                            </div>
                            <span className="">Don't have an account yet? <a className='signUp' href="/profile">Sign Up</a></span>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          onClick={(e) => handleLogin(e)}
                          type="button"
                          className="inline-block px-6 py-2.5 bg-emerald-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                <button onClick={openCart} className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4 flex items-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
                    className="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path fill="currentColor"
                      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
                    </path>
                  </svg>
                  <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">{cartQuantity}</span>
                </button>

                <div className="dropdown relative">
                  <a className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full"
                      style={{ height: "50px", width: "50px" }} alt="" loading="lazy" />
                  </a>
                  <ul className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-10
  " aria-labelledby="dropdownMenuButton2">
                    <li className="mx-2 mb-2">
                      <span>Account</span>
                    </li>
                    <li className="mx-2 mb-4">
                      <span>More</span>
                    </li>
                    <li className="bg-red-600 rounded-md text-center mx-2 text-white py-2">
                      Logout
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </header>
    </>

  );
};

export default Header;
