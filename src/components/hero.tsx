import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen bg-red-100 p-8 overflow-visible">
      <div className="flex flex-col items-center mt-16 lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0  mb-12 lg:mb-0">
        <h1 className="font-display font-bold mx-auto max-w-2xl tracking-tight text-center">
          <span className="block text-xl sm:text-6xl md:text-7xl">
            Welcome to
          </span>
          <span className="block text-red-400 font-extrabold text-4xl sm:whitespace-nowrap sm:text-7xl md:text-8xl">
            Tanik Foods
          </span>
        </h1>

        <p className="text-black text-center text-md lg:text-lg mb-6 max-w-full mx-auto">
          Where Spice is Life and Health is wealth.
        </p>

        <div className="flex md:flex-col flex-row items-center mx-auto gap-3 lg:flex-row lg:space-x-5 lg:space-y-0">
          <button className="px-2 py-2 bg-red-600 hover:bg-red-800 rounded-md">
            <Link
              to="/shop"
              className="inline-block text-white text-center font-medium py-1 px-3 text-base"
            >
              Shop Now
            </Link>
          </button>
          <button className="px-2 py-2 bg-red-600 hover:bg-red-800 rounded-md">
            <a
              href="tel:+2347036104433"
              className="inline-flex items-center justify-center px-3 py-1 text-base font-medium text-center text-white rounded-lg"
            >
              Contact Us
            </a>
          </button>
        </div>
      </div>

      <div className="relative lg:flex lg:justify-end mt-16">
        <div className="relative  shadow-lg">
          <img
            src="/allspices.jpg"
            alt="Home decor"
            className="w-full h-52 md:h-80 lg:w-[35rem] object-cover rounded-lg"
          />
          <img
            src="/healthymeals.jpg"
            alt="Overlapping decor"
            className="absolute w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-red-100 shadow-lg -top-16 -right-8 mb-8 md:mb-0"
          />
          <img
            src="/pastry.jpg"
            alt="Overlapping decor"
            className="absolute w-32 h-32 md:w-52 md:h-52 object-cover rounded-full border-4 border-red-100 shadow-lg -bottom-16 -left-16 mb-8 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
