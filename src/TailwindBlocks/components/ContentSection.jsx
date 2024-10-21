import React from 'react'
import sarvaPindi from "../../orugalluImages/sarva pindi.png"
import banner from "../../orugalluImages/banneroffoods.png"

const ContentSection = () => {
  return (
   <section>
    <section className="text-gray-600 body-font bg-BgColor text-TextColor bg-purple-100">
  <div className="container px-5 py-15 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={banner} />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-30 h-30 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <img src={sarvaPindi} className='contain height'/>
              <circle cx="12" cy="7" r="4"></circle>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-TextColor text-lg">Sarva pindi</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">A traditional Warangal snack, Sarvapindi is a savory, crispy pancake made from rice flour, chana dal, peanuts, and spices.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">At Oorugallu Ruchulu, we believe in serving food that’s not only delicious but also wholesome. All our dishes are homemade with love, using only the freshest ingredients and no preservatives. Every bite reflects the authentic, rich flavors of traditional Warangal cuisine, ensuring a meal that’s both yummy and nutritious. Whether you're enjoying a hearty meal or a light snack, you can trust that our food is made with care, just like it would be in your own kitchen. Taste the difference with Oorugallu Ruchulu, where every dish feels like home!</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
   </section>
  )
}

export default ContentSection