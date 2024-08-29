import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "./footer";

const About: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-red">
      <header
        className={`fixed w-full z-10 transition-colors duration-300 ${
          isScrolled ? "bg-red-50" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="logo" className="h-20 rounded-xl" />
            </Link>
          </div>

          <div className="flex items-center space-x-5">
            <button
              className="block sm:hidden ml-2"
              aria-label="Toggle Menu"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <IoMdClose className="text-2xl" />
              ) : (
                <HiOutlineMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl"
              aria-label="Close Menu"
              onClick={() => setShowMenu(false)}
            >
              <IoMdClose />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-6">
            <img src="/logo.png" alt="logo" className="h-20 mb-4" />
            <Link
              to="/"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <section id="about" className="bg-red-50 py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center  mt-12">
            About Tanik Foods
          </h2>
          <p className="mt-4 text-lg text-gray-500 text-center">
            Welcome to <strong>Tanik Foods</strong>, your one-stop destination
            for natural spices, seasonings, and healthy meals. Our mission is to
            promote a healthy lifestyle through high-quality, natural products.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Story */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="mt-2 text-gray-600">
                At Tanik Foods, we started with a passion for natural
                ingredients and a commitment to health and wellness. Founded in
                [2022], our journey has been driven by the desire to provide the
                most natural spices and seasonings to our customers. Over the
                years, we have expanded our products to include a variety of
                healthy meals, healthy teas, and pastry mix, ensuring that every
                product we offer meets our high standards of quality and taste.
              </p>
            </div>
            {/* Our Vision */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                Our vision is to be a leading provider of natural spices, known
                for our commitment to quality and customer satisfaction. We
                believe that food should be both delicious and nutritious, and
                we strive to inspire healthier eating habits with our wide range
                of products. From natural spices and seasonings to healthy meals
                and pastry mix, we are dedicated to helping you create
                delicious, wholesome meals that nourish your body and delight
                your taste buds.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Our Products
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Discover our wide range of natural products designed to enhance
              your healthy wellbeing:
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Natural Spices:</span> Fresh and
                aromatic spices to elevate your dishes.
              </li>
              <li>
                <span className="font-bold">Natural Seasonings:</span> Perfect
                blends to add flavor and nutrition.
              </li>
              <li>
                <span className="font-bold">Healthy Meals:</span> Healthy
                options like oats meal, unripe plantain, sweet potato, and
                wheat.
              </li>
              <li>
                <span className="font-bold">Healthy Teas:</span> Healthy
                Nourishing Teas.
              </li>
              <li>
                <span className="font-bold">Pastry Mix:</span> Easy-to-make
                mixes for puff puff, pancake, buns, and various cakes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-red-50 py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Try Our Products Today!
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join the Tanik Foods community and start enjoying a healthier
            lifestyle with our natural products.
          </p>
          <button className=" mt-4 px-2 py-2 bg-red-600 hover:bg-red-800 rounded-md">
            <Link
              to="/shop"
              className="inline-block text-white  text-center font-medium py-3 px-5 text-base "
            >
              Shop Now
            </Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
