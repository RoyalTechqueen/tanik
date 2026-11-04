
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";


const categories = [
  {
    id: "seasonings",
    name: "Seasonings & Spices",
    description: "Natural flavours to make every meal special.",
    image: "/spices.png",
    className: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    id: "pastry-mixes",
    name: "Pastry Mixes",
    description: "Easy-to-make puff-puff, cake mixes and more.",
    image: "/pastry.jpg",
    className: "",
    featured: false,
  },
  {
    id: "healthy-teas",
    name: "Healthy Teas",
    description: "Enjoy a little goodness in every cup.",
    image: "/tea-collection.png",
    className: "",
    featured: false,
  },
  {
    id: "healthy-meals",
    name: "Cereal & Healthy Meals Options",
    description: "Wholesome alternatives for everyday meals.",
    image: "/cereal-collection.png",
    className: "md:col-span-2",
    featured: false,
  },
];


const CategorySection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-container">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

          <div className="max-w-xl">
            <span className="text-[#F36B35] text-sm font-bold uppercase tracking-[0.2em]">
              Find your favourites
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#174D32] mt-3 leading-tight">
              Goodness for
              <span className="text-[#F36B35]"> every kitchen.</span>
            </h2>

            <p className="text-gray-500 mt-4 text-base md:text-lg">
              From flavourful seasonings to wholesome pantry essentials,
              discover products that make everyday living better.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[#174D32] font-bold hover:text-[#F36B35] transition-colors"
          >
            Explore all products
            <HiArrowUpRight className="text-xl" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-5 md:h-[620px]">

          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className={`group relative min-h-[260px] md:min-h-0 overflow-hidden rounded-2xl bg-[#174D32] ${category.className}`}
            >

              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              {/* Category Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">

                <div className="flex items-end justify-between gap-3">

                  <div className="max-w-[85%]">
                    <h3
                      className={`font-bold text-white leading-tight ${
                        category.featured
                          ? "text-2xl md:text-4xl"
                          : "text-xl md:text-2xl"
                      }`}
                    >
                      {category.name}
                    </h3>

                    <p className="text-white/80 text-sm mt-2 max-w-sm">
                      {category.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="flex-shrink-0 w-11 h-11 rounded-full bg-white text-[#174D32] flex items-center justify-center transition-all duration-300 group-hover:bg-[#F36B35] group-hover:text-white group-hover:rotate-45">
                    <HiArrowUpRight className="text-xl" />
                  </span>

                </div>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CategorySection;
