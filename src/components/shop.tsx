import React, { useState } from "react";
import { products } from "../productdata";
import { useCartStore } from "../store";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

const Shop: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const sortedProducts = [...products].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div className=" bg-red-50 min-h-screen">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl md:text-5xl font-bold mt-24 text-center">
          Our Products
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <button className="flex items-center text-gray-700">
            <Link to="/">
              <FaArrowLeft className="mr-2" />
            </Link>
            <span>Back</span>
          </button>
        </div>
        <div className="grid grid-cols-2 max-w-8xl mx-auto md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 gap-4">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="product-card relative flex flex-col sm:flex-row md:flex-col items-center bg-white shadow-md rounded-lg p-4"
            >
              <div className="relative w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image w-full md:h-48 h-40 object-cover rounded-lg mb-4"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white text-sm px-3 py-2 rounded-md">
                  {product.size}
                </div>
              </div>
              <div className="md:flex flex-row gap-4 items-center hidden md:pl-0">
                <h2 className="product-title text-xl font-bold">
                  {product.title}
                </h2>
              </div>
              <div className="mt-2 md:flex hidden items-center justify-between w-full">
                <p className="product-price font-semibold text-lg mr-4">
                  {formatPrice(product.price)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex flex-col gap-2 items-center md:hidden">
                <h2 className="product-title text-xl font-bold">
                  {product.title}
                </h2>
                <p className="product-price font-semibold text-lg mr-4">
                  {formatPrice(product.price)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 mb-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
