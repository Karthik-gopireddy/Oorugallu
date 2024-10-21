import React from 'react'
import garallu from "../../orugalluImages/garallu.jpg"
import sakinallu from "../../orugalluImages/sakinallu.png"
import Madugullu from "../../orugalluImages/murukulu.png"
import Bellapallu from "../../orugalluImages/bella appallu.png"
import Garajallu from "../../orugalluImages/garajalu.avif"
import NuvvulaLaddu from "../../orugalluImages/nuvvula laddu.png"
const HoverSection = () => {
  return (
    <section>
      <section className="text-gray-600 body-font bg-BgColor text-TextColor bg-purple-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-TextColor">A Feast for the Eyes and Tastebuds</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore the vibrant flavors of Oorugallu through our gallery! From traditional favorites to modern twists, each dish is crafted with care and packed with authentic taste. Get a glimpse of the mouthwatering meals we serve, all made with fresh ingredients and bursting with flavor.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full  h-[230px] object-cover object-center" src={garallu} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-TextColor mb-3">Garallu</h1>
                  <p className="leading-relaxed">Crispy Garallu are savory rice flour donuts, deep-fried to golden perfection, loved for their delightful crunch.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-[230px] object-cover object-center" src={sakinallu} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-TextColor mb-3">sakinallu</h1>
                  <p className="leading-relaxed">Crispy Sakinallu are deep-fried rice flour snacks, seasoned with sesame and spices, perfect for any occasion.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Madugullu} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-TextColor mb-3">Madugullu</h1>
                  <p className="leading-relaxed">Madugullu are soft, steamed rice dumplings filled with spiced lentils, offering a flavorful, delightful treat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Bellapallu} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-TextColor mb-3">Bellapallu</h1>
                  <p className="leading-relaxed">Bellapallu are sweet, steamed rice dumplings filled with jaggery and coconut, offering a deliciously traditional treat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={Garajallu} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-TextColor mb-3">Garjallu</h1>
                  <p className="leading-relaxed">Garajallu are crunchy, deep-fried snacks made from chickpea flour, seasoned with spices, perfect for a tasty treat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-[230px] object-cover object-center" src={NuvvulaLaddu} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-TextColor mb-3">Nuvvula Laddu</h1>
                  <p className="leading-relaxed">Nuvvula Laddu are sweet balls made from roasted sesame seeds and jaggery, offering a delicious treat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default HoverSection