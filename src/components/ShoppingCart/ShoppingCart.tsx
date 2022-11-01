import React, { useState } from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency'
import CartItem from '../CartItem/CartItem'
import CheckoutModal from '../Modals/CheckoutModal'

type ShoppingCartProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const [modalShow, setModalShow] = useState(false);
    const { closeCart, cartItems, clearCart } = useShoppingCart()

    const hideModal = () => {
        setModalShow(false)
    }

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Checkout</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Stack gap={3}>

                    {cartItems.map(item => (
                        <CartItem key={item._id} {...item} />
                    ))}

                    {cartItems.length === 0 ? <h3>No items added to cart</h3> : ''}

                    <div className='flex items-center'>
                        <button onClick={clearCart} className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700" >Clear All</button>
                        <div className='ms-auto fw-bold fs-5 mr-2'>Total: </div>
                        {formatCurrency(
                            cartItems.reduce((total, curr) => {
                                return total + curr.price * curr.quantity
                            }, 0)
                        )}
                    </div>

                    <button onClick={() => setModalShow(true)} className='bg-emerald-600 text-white py-3 rounded hover:bg-emerald-700'>
                        <a href='/checkout'>
                            Proceed to Checkout
                        </a>
                    </button>
                </Stack>

                <CheckoutModal show={modalShow} onHide={hideModal} />

            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart