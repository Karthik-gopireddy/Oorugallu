import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../orugalluImages/logo.png"

const NavBarSection = () => {
  return (
    <section>
      <header className="fixed top-0 left-0 w-full body-font bg-purple-300 text-white z-50 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src={logo} width={50} height={50} />
            <span className="ml-3 text-xl font-serif font-bold text-[#000000]">Oorugallu Ruchulu (The Falvours of warangal)</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Home</span>
            </Link>
            <Link to="/menu">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Menu</span>
            </Link>
            <Link to="/cart">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Cart</span>
            </Link>
            <Link to="/orders">
              <span className="mr-5 hover:text-white font-bold text-[#000000]">Orders</span>
            </Link>
            {/*
            <span className="mr-5 hover:text-white font-bold text-[#000000]">Logout</span> */}
          </nav>
        </div>
      </header>
      <div className="pt-20">
        {/* Add padding to prevent content from hiding behind the fixed navbar */}
      </div>
    </section>
  );
}

export default NavBarSection;
