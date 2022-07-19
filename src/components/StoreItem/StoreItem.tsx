import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency'

type StoreItemProps = {
    id: number
    title: string
    price: number
    category: string
    description?: string
    image: string
    rating: {
      rate: number
      count: number
    }    
}

const StoreItem = ({ id, title, price, category, image, rating: { rate, count } }: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  
  const quantity = getItemQuantity(id)

  return (
    <Card className='h-100'>
        <Card.Title className='mb-4'> {title} </Card.Title>
        <Card.Img variant='top' height="250px" src={image}  style={{ objectFit: "cover"}} />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="">{category}</span>
                <span className="">{rate}</span>
                <span className="">{count}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
        </Card.Body>

        <div className='mt-auto'>
            {quantity === 0 ? (
                <Button className='w-100' onClick={() => increaseCartQuantity(id, image, price, category)}>+ Add to cart</Button>
            ): (
                <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id, image, price, category)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
        </div>
    </Card>
  )
}

export default StoreItem