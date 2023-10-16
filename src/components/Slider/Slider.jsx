import React, { useState, useEffect } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

export const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide)

    const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

   const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? 2 : prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => prev === 2 ? 0 : prev + 1);
  };

  // Move to the next slide automatically
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    // }, 3000); // Change slide every 3 seconds (adjust as needed)

    // return () => clearInterval(interval);
  }, []);


  return (
    <div className="slider">
      <div className="container" style = {{transform:`translateX(-${currentSlide*100}vw)`}}>
        <img src={data[0]} alt=""/>
        <img src={data[1]} alt=""/>
        <img src={data[2]} alt=""/>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}