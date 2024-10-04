import React from 'react'
import banner1 from "/banner1.png"


function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-36">
          <div className='space-y-8'>
            <h1 className='text-2xl md:text-4xl font-bold'>Your Favorite Books Are Just a <br />  <span className='text-pink-500'>Click Away!!!</span></h1>
            <p className='text-sm md:text-xl'>Welcome to Book<span className='text-pink-500 font-bold'>N</span>ook, your cozy online sanctuary for book lovers! Explore a carefully curated selection of books across all genres, from timeless classics to modern bestsellers. Whether you're seeking your next great read or a hidden gem, Book<span className='text-pink-500 font-bold'>N</span>ook is your gateway to a world of literary adventure.</p>
             
          </div>
          <button className="btn mt-16 btn-secondary ">Get started</button>

        </div>
        <div className=" order-1 w-full md:w-1/2 mt-20">
          <img src={banner1} className="md:w-[550px] md:h-[460px] md:ml-12" alt="Banner img" />
        </div>
      </div>
    </>
  )
}

export default Banner