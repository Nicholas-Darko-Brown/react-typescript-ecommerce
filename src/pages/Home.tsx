import React, { useState } from "react";
// import Slider from "react-slick";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/Home.css";
import HeroImg from "../assets/hero.jpg";
import { Link, useNavigate } from "react-router-dom";
import Ratings from "../components/ratings/Ratings";
import { BsCart, BsEye } from "react-icons/bs";
import { BiHide } from "react-icons/bi";
import axios from "axios";
import { StoreProduct } from "../types/models";
import Testimonial from "../components/Testimonial/Testimonial";
import { api } from "../services/api";
import Questions from "../components/FAQs/Questions";
import Slider from "../components/Slider/Slider";

const Home = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { openCart, cartQuantity, cartItems } = useShoppingCart();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const { data } = useShoppingCart();
  const products: StoreProduct[] = data || [];

  const navigate = useNavigate();

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

  return (
    <div className="relative">

      <section className="mb-40 relative">

        <div className="relative div-two overflow-hidden bg-no-repeat bg-cover"></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center text-gray-800">
            <div className="div-one block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                The best offer on the market <br />
                <span className="text-blue-600">for your business</span>
              </h1>
              <button
                className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Get started
              </button>
              <button
                className="inline-block px-7 py-3 text-sm leading-snug bg-transparent text-blue-600 font-medium uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <Slider products={products} />

      <div className="data-section">
        {products.map((item: StoreProduct) => (
          <div onClick={() => navigate(`products/${item.id}`)} className="data-card cursor-pointer" key={item.id}>
            <img src={item.image} alt="" />
            <h4> {item.title} </h4>
            <div className="sub-data-section">
              <span>Count: {item.rating.count} </span>
              <span>
                Rating: <Ratings rate={item.rating.rate} />
              </span>
            </div>
          </div>
        )
        )}
      </div>

      <Testimonial />
      <Questions />

    </div>
  );
};

export default Home;
