import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(./spice3.jpg)",
      }}
      id="home"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="font-display text-4xl font-extrabold mx-auto max-w-2xl tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Welcome to</span>
          <span className="block  text-red-600 text-6xl sm:text-7xl md:text-8xl">
            Tanik Foods
          </span>
          <span className="block">Store.</span>
        </h1>
        <p className="max-w-2xl mb-6 font-medium mt-3 text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
          Where Spice is Life and Health is wealth.
        </p>
        <div className="space-x-5 space-y-3">
          <button className="px-2 py-2 bg-red-700 rounded-md">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 "
            >
              Explore our Products
            </a>
          </button>
          <button className="px-2 py-2 bg-red-700 rounded-md">
            <a
              href="https://wa.me/+2348055284718"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800"
            >
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
