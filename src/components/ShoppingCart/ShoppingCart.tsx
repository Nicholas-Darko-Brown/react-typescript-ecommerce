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
    const { closeCart, cartItems, clearCart } = useShoppingCart()


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

                    <a href='/checkout' className='w-full text-center mt-10'>
                        <button className='bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700'>
                            Proceed to Checkout
                        </button>
                    </a>
                </Stack>

            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart