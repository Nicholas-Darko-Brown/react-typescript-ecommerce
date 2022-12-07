import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import StoreItem from '../components/StoreItem/StoreItem'
// import Tabs from '../components/Tabs/Tabs'
import { useShoppingCart } from '../context/ShoppingCartContext'
import "../styles/Store.css"
import { StoreProduct } from '../types/models'
import LoadingSpinner from '../utilities/loadingSpinner'

const Store = () => {
  const { data, error } = useShoppingCart();
  const [selectedCategory, setSelectedCategory] = useState("");
  // const navigate = useNavigate();

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div className='min-h-screen flex justify-center items-center'> <LoadingSpinner /> </div>

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };


  return (
    <section className='min-h-screen'>
      <div className="my-5">
        <div className='flex items-center justify-center flex-wrap gap-5 border'>
          <div className="category flex items-center gap-3">
            <label htmlFor="category-list">Categories</label>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
              className="border border-gray-400 p-2 rounded-md shadow-sm w-56 text-lg">
              <option value="">All</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
            </select>
          </div>

          <div className="ratings flex items-center gap-3">
            <label htmlFor="category-list">Ratings</label>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
              className="border border-gray-400 p-2 rounded-md shadow-sm w-56 text-lg">
              <option value="">All</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
            </select>
          </div>

          <div className="prices flex items-center gap-3">
            <label htmlFor="category-list">Prices</label>
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
              className="border border-gray-400 p-2 rounded-md shadow-sm w-56 text-lg">
              <option value="">All</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
            </select>
          </div>
        </div>
        {/* <Tabs /> */}
      </div>

      <Row md={2} xs={1} lg={3} className="mx-4 g-5">
        {
          data.map((item: StoreProduct) => (
            // onClick={() => navigate(`product/details/${item._id}`)}
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))
        }
      </Row>
    </section>
  )
}

export default Store