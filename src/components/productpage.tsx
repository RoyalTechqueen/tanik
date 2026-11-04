
import React, { useMemo, useState, useEffect } from "react";
import { products } from "../productdata";
import ProductCard from "./productcard";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

const Productpage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const itemsPerPage = 12;

  const categories = [
    { label: "All Products", value: "All" },
    { label: "Seasonings & Spices", value: "Natural Seasoning" },
    { label: "Pastry Mixes", value: "Pastry Mix" },
    { label: "Healthy Teas", value: "Healthy Teas" },
    { label: "Cereal & Healthy Meals", value: "Healthy Meals" },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <section className="bg-[#FFF8EC] py-20 md:py-28" id="products">
      <div className="section-container">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
              Made for your kitchen
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#174D32] md:text-5xl">
              Explore Our Products
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Discover natural seasonings, easy-to-make pastry mixes
              and wholesome food options for everyday living.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 font-bold text-[#174D32] transition-colors hover:text-[#F36B35]"
          >
            View full shop
            <HiArrowRight />
          </button>
        </div>

        <div className="mb-6 flex items-center gap-3 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setSelectedCategory(category.value)}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                selectedCategory === category.value
                  ? "bg-[#174D32] text-white shadow-md"
                  : "border border-[#EAE3D7] bg-white text-gray-600 hover:border-[#174D32] hover:text-[#174D32]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-[#174D32]">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {currentItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white p-12 text-center">
            <h3 className="text-xl font-bold text-[#174D32]">
              No products found
            </h3>

            <p className="mt-2 text-gray-500">
              There are currently no products in this category.
            </p>

            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className="primary-button mt-5"
            >
              View all products
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
              className="rounded-full border border-[#EAE3D7] px-4 py-2 text-[#174D32] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              Previous
            </button>

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`h-10 w-10 rounded-full font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-[#174D32] text-white"
                    : "bg-white text-gray-600 hover:bg-[#F5C64B]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
              className="rounded-full border border-[#EAE3D7] px-4 py-2 text-[#174D32] hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Productpage;
