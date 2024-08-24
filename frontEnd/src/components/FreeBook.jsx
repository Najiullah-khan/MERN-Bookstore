import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios'


function FreeBook() {
  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
         
    
    try {
      const res=await axios.get("http://localhost:4001/book");
         const response= res.data.filter(book => book.category === 'free');
         console.log(response)
         setbook(response);
      
      
    } catch (error) {
      console.log(error)
    }
  }
    getBook();
  },[]);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
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


  // Example array for dynamic rendering

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
      <div>
      <Slider {...settings}>
        {book.map((item, index) => (
          <div key={index} >
            <Card data={item}/>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
