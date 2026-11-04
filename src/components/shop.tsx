
import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMagnifyingGlass,
  HiOutlineShoppingBag,
  HiXMark,
} from "react-icons/hi2";

import Header from "../header";
import Footer from "../footer";
import { products } from "../productdata";
import { useCartStore } from "../store";

const ITEMS_PER_PAGE = 12;

const categories = [
  { label: "All Products", value: "all" },
  { label: "Seasonings & Spices", value: "seasonings" },
  { label: "Pastry Mixes", value: "pastry-mixes" },
  { label: "Healthy Teas", value: "healthy-teas" },
  { label: "Cereal & Healthy Meals", value: "healthy-meals" },
];

const categoryMap: Record<string, string> = {
  seasonings: "natural seasoning",
  "pastry-mixes": "pastry mix",
  "healthy-teas": "healthy teas",
  "healthy-meals": "healthy meals",
};

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const addToCart = useCartStore((state) => state.addToCart);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const selectedCategory = searchParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      const category = categoryMap[selectedCategory];

      result = result.filter(
        (product) =>
          product.category.toLowerCase() === category
      );
    }

    if (search.trim()) {
      const searchTerm = search.toLowerCase();

      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }

    if (sort === "name-asc") {
      result.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sort === "price-asc") {
      result.sort(
        (a, b) =>
          Math.min(...a.variants.map((v) => v.price)) -
          Math.min(...b.variants.map((v) => v.price))
      );
    }

    if (sort === "price-desc") {
      result.sort(
        (a, b) =>
          Math.min(...b.variants.map((v) => v.price)) -
          Math.min(...a.variants.map((v) => v.price))
      );
    }

    return result;
  }, [selectedCategory, search, sort]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, search, sort]);

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleQuickAdd = (product: (typeof products)[number]) => {
    const variant = product.variants[0];

    if (!variant) return;

    addToCart(
      {
        id: product.id,
        title: product.title,
        price: variant.price,
        size: variant.size,
        image: product.image,
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header />

      <main>
   
     {/* Shop Content */}
        <section className="section-container py-14 md:py-20">
          {/* Search and Sorting */}
          <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search for a product..."
                className="w-full rounded-full border border-[#E5DCCF] bg-white py-4 pl-12 pr-12 outline-none transition focus:border-[#174D32]"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F36B35]"
                >
                  <HiXMark className="text-xl" />
                </button>
              )}
            </div>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-[#E5DCCF] bg-white px-5 py-4 text-sm font-medium text-[#292929] outline-none focus:border-[#174D32]"
            >
              <option value="default">Sort: Default</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="price-asc">
                Price: Low to High
              </option>
              <option value="price-desc">
                Price: High to Low
              </option>
            </select>
          </div>

          {/* Categories */}
          <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() =>
                  handleCategoryChange(category.value)
                }
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${
                  selectedCategory === category.value
                    ? "bg-[#174D32] text-white"
                    : "border border-[#E5DCCF] bg-white text-[#174D32] hover:border-[#174D32]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Product Count */}
          <div className="mb-7 flex items-center justify-between">
            <h2 className="text-xl font-black text-[#103923] md:text-2xl">
              {selectedCategory === "all"
                ? "All Products"
                : categories.find(
                    (category) =>
                      category.value === selectedCategory
                  )?.label || "Products"}
            </h2>

            <span className="text-sm text-gray-500">
              {filteredProducts.length} products
            </span>
          </div>

          {/* Product Grid */}
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {paginatedProducts.map((product) => {
                const lowestPrice = Math.min(
                  ...product.variants.map(
                    (variant) => variant.price
                  )
                );

                const hasMultipleSizes =
                  product.variants.length > 1;

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-[#EDE5D7] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Link
                      to={`/product/${product.id}`}
                      className="block"
                    >
                      <div className="relative flex h-44 items-center justify-center bg-[#FFF8EC] p-4 sm:h-56">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                        />

                        {hasMultipleSizes && (
                          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#174D32] shadow-sm">
                            {product.variants.length} sizes
                          </span>
                        )}
                      </div>
                    </Link>

                    <div className="p-4 sm:p-5">
                      <p className="text-xs font-semibold text-[#F36B35]">
                        {product.category}
                      </p>

                      <Link to={`/product/${product.id}`}>
                        <h3 className="mt-2 min-h-10 font-bold text-[#103923] transition hover:text-[#F36B35]">
                          {product.title}
                        </h3>
                      </Link>

                      <p className="mt-3 text-lg font-black text-[#174D32]">
                        {hasMultipleSizes ? "From " : ""}
                        {formatPrice(lowestPrice)}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {product.variants
                          .map((variant) => variant.size)
                          .join(" / ")}
                      </p>

                      <div className="mt-5 flex flex-col gap-2">
                        <Link
                          to={`/product/${product.id}`}
                          className="flex items-center justify-center gap-2 rounded-full bg-[#174D32] px-3 py-3 text-xs font-bold text-white transition hover:bg-[#103923] sm:text-sm"
                        >
                          View Product
                          <HiArrowRight />
                        </Link>

                        <button
                          onClick={() =>
                            handleQuickAdd(product)
                          }
                          className="flex items-center justify-center gap-2 rounded-full border border-[#174D32] px-3 py-3 text-xs font-bold text-[#174D32] transition hover:bg-[#FFF8EC] sm:text-sm"
                        >
                          <HiOutlineShoppingBag />
                          Quick Add
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl bg-white px-6 py-16 text-center">
              <HiMagnifyingGlass className="mx-auto text-5xl text-[#F36B35]" />

              <h3 className="mt-5 text-2xl font-black text-[#103923]">
                No products found
              </h3>

              <p className="mt-3 text-gray-500">
                Try another search term or select a different
                category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  handleCategoryChange("all");
                }}
                className="primary-button mt-7"
              >
                View All Products
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.max(1, page - 1)
                  )
                }
                disabled={currentPage === 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED6C9] bg-white text-[#174D32] transition hover:bg-[#174D32] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <HiArrowLeft />
              </button>

              <span className="text-sm font-semibold text-[#174D32]">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(totalPages, page + 1)
                  )
                }
                disabled={currentPage === totalPages}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED6C9] bg-white text-[#174D32] transition hover:bg-[#174D32] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <HiArrowRight />
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
