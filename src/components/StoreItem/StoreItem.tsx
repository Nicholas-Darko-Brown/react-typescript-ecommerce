import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { formatCurrency } from '../../utilities/formatCurrency'

type StoreItemProps = {
  _id: string
  title: string
  price: number
  category: string
  description?: string
  image: {
    url: string
  }
  rating: {
    rate: number 
    count: number
  }   
}

const StoreItem = ({ _id, title, price, category, image: {url}, rating: { rate, count } }: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
  
  const quantity = getItemQuantity(_id)

  return (
    <Card className='h-100 p-3'>
        <Card.Title className='mb-4 text-center'> {title} </Card.Title>
        <Card.Img variant='top' height="250px" src={url}  style={{ objectFit: "contain"}} />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="">{category}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-baseline">
                <span className="">Ratings: {rate}</span>
                <span className="">Count: {count}</span>
            </Card.Text>
        </Card.Body>

        <div className='mt-auto'>
            {quantity === 0 ? (
                <Button className='w-100' variant='secondary' onClick={() => increaseCartQuantity(_id, url, price, category)}>+ Add to cart</Button>
            ): (
                <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(_id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(_id, url, price, category)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(_id)}
                >
                  <BsTrash />
                </Button>
              </div>
            )}
        </div>
    </Card>
  )
}

export default StoreItem