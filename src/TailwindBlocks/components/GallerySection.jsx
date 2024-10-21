import React from 'react'
import bondhiLaddu from "../../orugalluImages/bondhi laddu.jpg"
import bondhi from "../../orugalluImages/bondhi.avif"
import sarvapindi from "../../orugalluImages/sarva pindi.png"
import podi1 from "../../orugalluImages/podi.jpeg"
import chicken from "../../orugalluImages/checken.jpeg"
import kakarkaya from "../../orugalluImages/kakarkaya.jpeg"
import kara from "../../orugalluImages/kara.jpeg"
import podi2 from "../../orugalluImages/podi2.jpeg"

const GallerySection = () => {
  return (
  <section>
    <section className="text-gray-600 body-font bg-BgColor text-TextColor bg-purple-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={bondhiLaddu} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Sweet</h3>
          <h2 className="text-TextColor title-font text-lg font-medium">Laddu</h2>
          <p className="mt-1">Rs:20 /-</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={bondhi} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hot</h3>
          <h2 className="text-TextColor title-font text-lg font-medium"> Bondhi</h2>
          <p className="mt-1">Rs:100 /-500gm</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={sarvapindi} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hot</h3>
          <h2 className="text-TextColor title-font text-lg font-medium">Sarva pindi</h2>
          <p className="mt-1">Rs:30 /-</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={podi1} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Powder</h3>
          <h2 className="text-TextColor title-font text-lg font-medium">Garam masala</h2>
          <p className="mt-1">Rs:80 /- 250gm</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={chicken} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Pickle</h3>
          <h2 className="text-TextColor title-font text-lg font-medium">Chicken Pickle</h2>
          <p className="mt-1">Rs:250 /- 500gm</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={kakarkaya} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Pickle</h3>
          <h2 className="text-TextColor title-font text-lg font-medium">Kakarkaya pickle</h2>
          <p className="mt-1">Rs:100/- 250gm</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={kara} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hot</h3>
          <h2 className="text-TextColor title-font text-lg font-medium">Bondhi</h2>
          <p className="mt-1">Rs:150/- 1kg</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={podi2} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Powder</h3>
          <h2 className="text-TextColor title-font text-lg font-medium">Kakarkaya podi</h2>
          <p className="mt-1">Rs:100/- 250gm</p>
        </div>
      </div>
    </div>
  </div>
</section>
  </section>
  )
}

export default GallerySection