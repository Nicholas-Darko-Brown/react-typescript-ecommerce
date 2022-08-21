import React from "react";
import Slider from "react-slick";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../styles/Home.css"
import HeroImg from "../assets/hero.jpg"
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Ratings from "../components/ratings/Ratings";


const Home = () => {
  const { data } = useShoppingCart()
  const data1 = data || []

  const navigate = useNavigate()
  

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div >
    <Slider {...settings} className="slider-container">

      {data1.slice(0, 10).map((item: JSX.IntrinsicAttributes & { _id: string; title: string; price: number; category: string; description: string; image: {url: string}; rating: { rate: number; count: number } }) => (
          <div key={item._id}>
          <img className="slider-img" src={item.image.url} alt=""/>
          <div className="new-items">New</div>
          </div>
        ))}

    </Slider>

    <div className="hero-section">
        <div className="left-hero-section">
          <h1 className="hero-txt">Every <span className="purchase">purchase</span> will be made with <span className="pleasure">pleasure</span></h1>
          <button onClick={() => navigate("/store")} className="store-btn">Buy from store <BsCart /> </button>
        </div>
        <div className="right-hero-section">
          <img className="hero-img" src={HeroImg} alt="" />
        </div>
    </div>

    <div className="data-section">
      {data1.slice(10, 19).map((item: JSX.IntrinsicAttributes &  { _id: string; title: string; price: number; category: string; description: string; image: {url: string}; rating: { rate: number; count: number } }) => (
        <div className="data-card" key={item._id}>
          <img src={item.image.url} alt="" />
          <h4> {item.title} </h4>
          <div className="sub-data-section">
            <span>Count: {item.rating.count} </span>
            <span>Rating: <Ratings rate={item.rating.rate}/> </span>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}

export default Home