

// import React, { useEffect, useState } from 'react';

// ... rest of your component code

import Image from 'next/image'



export default function Home() {
  return (
    <>
      <div className="h-full w-full bg-white">
        <header className="h-29 w-full  bg-gray-50 flex-grow ">
          <div className="flex items-center justify-center space-x-3">
            <p className=" font-extrabold text-4xl text-green-800 font-serif text-center mb-2 mt-2 ml-2">
              Green Soil
            </p>
            <Image src={"/logo.png"} alt="logo" width={60} height={60} />
          </div>
        </header>
        <header className=" flex justify-end w-full bg-gray-50 h-9 items-center space-x-3 p-4  ">
          <button className="text-white rounded-2xl px-3 text-center justify-center h-7 font-serif     bg-green-800">
            Sign up
          </button>
          {/* <button className="text-white rounded-2xl px-3 text-center justify-center h-7 font-serif     bg-green-800">
            About Us
          </button> */}
        </header>
        <div className="flex justify-center w-full h-6 bg-green-800 mt-1  rounded-lg px-4 mx-auto">
          <p className="animate-slideLeft text-white font-serif font-light">
            Organic Waste to Organic Ferlizer
          </p>
        </div>
        <div className='mt-[20px]'>
          <div className="grid grid-flow-row     mb-3 p-3  grid-cols-2 space-y-4">
            <div className="text-6xl text-green-800 font-serif bg-gray-50 text-center rounded-l-md items-center justify-center ">
              4
            </div>
            <div className="bg-green-800 text-white font-serif text-justify p-4 rounded-r-md ">
              2 Lorem, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quo est quidem sunt. Corrupti maiores id voluptatibus natus cumque
              quibusdam quos doloribus, hic excepturi reprehenderit, voluptatum
              recusandae quae ea incidunt optio!ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem molestias iure dolorem id neque
              provident blanditiis amet odio reprehenderit repudiandae
              quibusdam, vel obcaecati, quo odit dignissimos quos reiciendis,
              quaerat vitae?
            </div>
            <div className="bg-green-800 text-white font-serif text-justify p-4 rounded-r-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              blanditiis possimus nostrum, ratione dolorem deleniti fuga ducimus
              quae et sit necessitatibus, excepturi aperiam asperiores? Et nam
              nemo eos quibusdam atque. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Deleniti voluptas error quos tenetur nam ea
              suscipit excepturi quam, nemo ex quisquam tempora quia ipsa
              molestias laborum impedit non eum dignissimos.
            </div>
            <div className="text-6xl text-green-800 font-serif bg-gray-50 text-center rounded-l-md items-center justify-center ">
              4
            </div>
          </div>
        </div>

        <div className="flex-row md:flex-auto justify-between mt-3 p-3  rounded-lg  items-center mx-auto ">
          <p className=" text-justify  font-serif   ">
            Step into a world where every seed planted is a promise of life,
            where soil isn't just dirt but a canvas for nature's masterpiece. At
            Green Soil, we're on a mission to redefine your gardening
            experience. Our organic fertilizer, crafted from the heart of
            sustainability, breathes life into your garden, creating a sanctuary
            of vibrant colors and thriving greenery. Join us in cultivating not
            just gardens, but a greener, healthier planet. Discover the essence
            of Green Soil where growth meets grace, and your garden becomes a
            testament to the beauty of nature
          </p>
          <button className=" text-white font-medium rounded-full m-3  flex justify-end bg-green-800 px-3 mx-auto">
            Shop Now
          </button>
        </div>
        <></>

        <footer className="bg-green-800  flex justify-evenly h-auto absolute w-full text-white">
          <div className=" justify-start font-serif text-center">
            <p className="text-lg font-semibold m-3 text-gray-50">ABOUT US</p>
            <p>About</p>
            <p>Terms Of Service</p>
            <p>Our Mission</p>
          </div>
          <div className=" justify-start font-serif text-center">
            <p className="text-lg font-semibold m-3 text-gray-50">
              CUSTOMER SERVICE
            </p>
            <p>Terms & conditions</p>
            <p>Privacy policy</p>
            <p>FAQ's</p>
          </div>
          <div className=" justify-start font-serif text-center">
            <p className="text-lg font-semibold m-3 text-gray-50">CONTACT US</p>
            <p>Call Us At: +92302 0268181</p>
            <p>Email Us: support@greensoil.com.pk</p>
          </div>
          <div className=" justify-start font-serif text-center">
            <p className="text-lg font-semibold m-3 text-gray-50">
              SIGN UP FOR UPDATES
            </p>
            <div>
              <input
                type="Enter Your Email"
                className="border-black rounded-l-lg bg-green-900"
              />
              <button className="rounded-r-lg bg-white text-green-800 px-4 font-serif">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}




