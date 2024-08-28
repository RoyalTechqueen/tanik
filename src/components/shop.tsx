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
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  return (
    <div className="container mx-auto bg-red-50 min-h-screen">
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
        <div className="grid grid-cols-1 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="product-card flex flex-col sm:flex-row md:flex-col items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="product-image w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex-grow sm:pl-4 md:pl-0">
                <h2 className="product-title text-xl font-bold">
                  {product.title}
                </h2>
                <p className="product-size text-gray-600 my-2">
                  {product.size}
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="product-price font-bold text-lg mr-4">
                  {formatPrice(product.price)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-button bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
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
