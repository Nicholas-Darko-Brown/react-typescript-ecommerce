import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency'

type CartItemProps = {
    id: number
    quantity: number
    image: string
    price: number
    category: string
}

const CartItem = ({ id, quantity, image, price, category }: CartItemProps) => { 
  const { removeFromCart } = useShoppingCart()

  return (
    <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
      <img src={image} alt="" style={{width: "100px", height: "auto", objectFit: "cover"}} />

      <div className='me-auto'>
        <span>{category}</span>
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
      </div>

      <div className="text-muted" style={{ fontSize: ".75rem" }}>
        {formatCurrency(price)}
      </div>

      <div> {formatCurrency(price * quantity)}</div>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>

    </Stack>
  )
}

export default CartItem