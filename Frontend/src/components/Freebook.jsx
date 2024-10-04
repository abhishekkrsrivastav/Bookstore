import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from "axios"

function Freebook() {
  const[book,setBook]=useState([])
 useEffect(()=>{
  const getBook=async()=>{
    try {
    const response= await axios.get("http://localhost:5005/book");
    
   const data= response.data.filter((e)=>e.category==="Free")
   console.log(data);
   
    setBook(data);
    
    } catch (error) {
      console.log(error);
      
    }
  }
  getBook();
 },[])
  // const filterdata=list.filter((e)=>e.category==="Free");
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
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
      <h1 className='font-semibold text-xl pb-2 '>Free Offered Courses</h1>
     
      <p>Discover our free courses at BookNook! Enhance your literary skills and explore new genres, all at no cost. Start today!</p>
      </div>
   
    <div>
    <Slider {...settings}>
         {book.map((item)=>(
          <Card item={item} key={item.id}></Card>
         ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook