import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './whatGPT3.css';
import {dataDigitalBestSeller } from './data';
const WhatGPT3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
     arrows: false,
    initialSlide: 0,
     autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
          
        },
      },
       {
        breakpoint: 1050,
        
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
  <div className="gpt3__whatgpt3r" id="wgpt3">

<div className='h-hed'><h1>Drop Name</h1></div>
    <div className="sliders">
    <Slider {...settings} className="slid">
        {dataDigitalBestSeller.map((item) => {
          console.log(item.nftimg)
        return (  
          <div className="card">
           
              <img
                src={item.nftimg}
                alt={item.title}
                // onError={handleErrorImage}
                />
          </div>)
              }
        )}
      </Slider></div>
  </div>
  );
};

export default WhatGPT3;
