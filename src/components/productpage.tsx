import React from "react";
import { useState } from "react";
import { products } from "../productdata";
import ProductCard from "./productcard";

const Productpage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    return filteredProducts;
  };

  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  const currentItems = filterProducts().slice(
    indexofFirstItem,
    indexofLastItem
  );
  const totalPages = Math.ceil(filterProducts().length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen">
      <div className="mb-4 flex flex-col justify-between items-center text-center flex-wrap">
        <h1 className="text-3xl font-bold mb-4 text-center mt-4">
          Our Products
        </h1>
        <div className="flex gap-4 items-center">
          <h2> Sort By:</h2>
          <div className="border rounded  px-8 py-2 bg-white text-md font-medium flex items-center">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="px-2 py-1"
            >
              <option value="All">All</option>
              <option value="Natural Seasoning">Natural Seasonings</option>
              <option value="Pastry Mix">Pastry Mix</option>
              <option value="Healthy Meals">Healthy Meals</option>
              <option value="Spices">Spices</option>
              <option value="Healthy Teas">Healthy Teas</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => product}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 mb-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Productpage;
