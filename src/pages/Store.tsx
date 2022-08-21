import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItem/StoreItem'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { asidePriceData } from '../helpers/asidePriceData'
import { category } from '../helpers/categoryData'
import { ratings } from '../helpers/ratingsData'
import "../styles/Store.css"

const Store = () => {
  const [checked, setChecked] = useState(false);
  const { data, error } = useShoppingCart()
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>
  

  return (
    <div className='shopContainer'>
      <div className="aside">
        <div className="priceContainer">
          <h4>Price</h4>

          {asidePriceData.map((item, index) => (
              <div key={index} className="labelContainer">
                <input
                  value={item}
                  type="checkbox"
                  onChange={() => setChecked(!checked)}
                />
                {item}
              </div>
            ))}
        </div>

        <div className="">
          <h4>Category</h4>

          {category.map((item, index) => (
            <div key={index} className="labelContainer">
              <input type="checkbox" />
              {item}
            </div>
          ))}
        </div>

        <div className="">
          <h4>Ratings</h4>

          {ratings.map((rating, index) => (
            <div key={index} className="labelContainer">
              <input type="checkbox" />
              {rating}
            </div>
          ))}
        </div>

      </div>

      <Row md={2} xs={1} lg={3} className="g-3 catalog">
        {data.map((item: JSX.IntrinsicAttributes & { _id: string; title: string; price: number; category: string; description: string; image:{ url: string}; rating: { rate: number; count: number } }) => (
          <Col key={item._id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Store