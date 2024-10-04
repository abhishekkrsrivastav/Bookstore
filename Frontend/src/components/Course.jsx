import React, { useEffect, useState } from 'react'
 
import Card from "./Card"
import {Link } from "react-router-dom"
import axios from "axios"
function Course() {
 const[book,setBook]=useState([])
 useEffect(()=>{
  const getBook=async()=>{
    try {
    const response= await axios.get("http://localhost:5005/book");
    console.log(response.data);
    setBook(response.data)
    
    } catch (error) {
      console.log(error);
      
    }
  }
  getBook();
 },[])
    
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white  dark:border'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>Books for Every Taste – Start Exploring {" "} 
            <span className='text-pink-500'>Here!</span>
        </h1>
        <p className='mt-12'>
        Unlock a world of knowledge with our comprehensive courses at BookNook! Whether you're a budding writer, an avid reader, or someone looking to deepen their understanding of literature, our courses are designed to inspire and educate. With expert instructors and engaging content, you'll find the perfect course to fuel your passion for books. Start your learning journey today!</p>
        <Link to="/">
        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item)=>(
            <Card key={item.id} item={item}></Card>
          ))  
        }
    </div>
        
   </div>
   </>
  )
}

export default Course