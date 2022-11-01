import React, { useMemo, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import StoreItem from '../components/StoreItem/StoreItem'
// import Tabs from '../components/Tabs/Tabs'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { category } from '../helpers/categoryData'
import "../styles/Store.css"
import { StoreProduct } from '../types/models'
import LoadingSpinner from '../utilities/loadingSpinner'

const Store = () => {
  const { data, error } = useShoppingCart();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [track, setTrack] = useState("");
  const [filteredObjects, setFilteredObjects] = useState([])

  const allCategories = data && data.map((item: StoreProduct) => (
    item.category
  ))

  const allPrices = data && data.map((item: StoreProduct) => (
    item.price
  ))


  const uniqueCategories = allCategories && Array.from(new Set(allCategories))
  const uniquePrices = allPrices && Array.from(new Set(allPrices))

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value)
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value)
  }

  const getFilteredCategories = () => {
    console.log(selectedCategory)
    if (!selectedCategory) {
      setFilteredObjects(data);
      return data;
    }
    // if (selectedCategory === "All") {
      
    // }
    setTrack("category")
    
    setFilteredObjects(data.filter((item: StoreProduct) => item.category === selectedCategory));
    return data.filter((item: StoreProduct) => item.category === selectedCategory);
  };

  const getFilteredPrices = () => {
    if (!selectedPrice) {
      setFilteredObjects(data);      
      return data;
    }
    setTrack("price")
    setFilteredObjects(data.filter((item: StoreProduct) => Number(item.price) === Number(selectedPrice)));

    return data.filter((item: StoreProduct) => Number(item.price) === Number(selectedPrice))
  };

  const filteredCategories = useMemo(getFilteredCategories, [selectedCategory, data]);
  const filteredPrices = useMemo(getFilteredPrices, [selectedPrice, data]);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div className='min-h-screen flex justify-center items-center'> <LoadingSpinner /> </div>


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
              <option value="All">All</option>
              {uniqueCategories.map((category, index) => (
                <option key={index} value={category}> {category} </option>
              ))}
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="prices flex items-center gap-3">
            <label htmlFor="category-list">Prices</label>
            <select
              name="category-list"
              id="category-list"
              onChange={handlePriceChange}
              className="border border-gray-400 p-2 rounded-md shadow-sm w-56 text-lg">
              <option value="">All</option>
              {uniquePrices.map((price, index) => (
                <option key={index} value={price}> GHS {price} </option>
              ))}
            </select>
          </div>
        </div>
        {/* <Tabs /> */}
      </div>

      <Row md={2} xs={1} lg={3} className="mx-4 g-5">
        { 
        // track === "category" ?
          filteredObjects ? filteredObjects.map((item: StoreProduct) => (
            // onClick={() => navigate(`product/details/${item._id}`)}
            <Col key={item._id}>
              <StoreItem {...item} />
            </Col>
          ))
          :  
          data.map((item: StoreProduct) => (
            // onClick={() => navigate(`product/details/${item._id}`)}
            <Col key={item._id}>
              <StoreItem {...item} />
            </Col>
          ))
        }
      </Row>
    </section>
  )
}

export default Store