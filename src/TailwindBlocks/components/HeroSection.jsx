
import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../orugalluImages/logo.png"

const HeroSection = () => {
  return (
    <section>
      <section className="text-gray-600 body-font bg-BgColor text-TextColor bg-purple-100">
        <div className="container mx-auto flex px-5 pt-24 pb-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor"><span className='text-yellow-800 font-bold'>Oorugallu Ruchulu – </span>
              <br className="hidden lg:inline-block" />Where Tradition Meets Convenience
            </h1>
            <p className="mb-8 leading-relaxed">Oorugallu Ruchulu brings the rich and diverse flavors of Warangal (Oorugallu) to your plate with just a click. Our food delivery platform allows you to explore a wide range of traditional and contemporary dishes, prepared with love and authenticity.</p>
            <div className="flex justify-center">
              <Link to="/menu">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Order Here</button>
              </Link>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>

          <div className="">
          <img src={logo} alt="logo"/>
          </div>

        </div>
      </section>
    </section>
  )
}

export default HeroSection