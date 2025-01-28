import React from "react";
import Slider from "react-slick";
import villa1 from "../assets/img/villa1.jpg";
import villa2 from "../assets/img/villa2.jpg";
import villa3 from "../assets/img/villa3.jpg";
import villa4 from "../assets/img/villa4.jpg";
import villa5 from "../assets/img/villa5.jpg";
import villa6 from "../assets/img/villa6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSwiper } from "swiper/react";

const Residencies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay slider
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024, // For screen sizes < 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For screen sizes < 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: "Serenity Haven Villa",
      price: "4.5Cr",
      detail: "Kolkata Riverside Terrace, Howrah, Kolkata, West Bengal",
      image: villa1,
    },
    {
      name: "Azure Vista Mansion",
      price: "5Cr",
      detail: "Jaipur Royal Orchard Drive, Mansarovar, Jaipur, Rajasthan",
      image: villa2,
    },
    {
      name: "Sapphire Dream Villa",
      price: "3.5Cr",
      detail: "Mumbai Blossom Lane, Andheri West, Mumbai, Maharashtra",
      image: villa3,
    },
    {
      name: "Mystic Moonlight Manor",
      price: "4.2Cr",
      detail: "Delhi Serenity Street, Dwarka Sector 22, New Delhi, Delhi",
      image: villa4,
    },
    {
      name: "Majestic Mirage Estate",
      price: "6Cr",
      detail: "Bangalore Green Haven Road, Whitefield, Bangalore, Karnataka",
      image: villa5,
    },
    {
      name: "Solstice Sanctuary",
      price: "4.8Cr",
      detail: "Chennai Harmony Crescent, Adyar, Chennai, Tamil Nadu",
      image: villa6,
    },
  ];

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Slider {...settings}>
          {data.map((card, i) => (
            <div key={i} className="flexColStart r-card">
              <img src={card.image} alt="home" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>₹</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Residencies;


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
      <div className="r-buttons">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    );
  };