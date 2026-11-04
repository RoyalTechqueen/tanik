
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiOutlineCheckCircle } from "react-icons/hi";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EC] pt-28 pb-20 lg:pt-36 lg:pb-28">

      {/* Decorative Background Elements */}
      <div className="absolute top-24 right-0 w-72 h-72 bg-[#F5C64B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#174D32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">

          {/* LEFT: Hero Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Brand Label */}
            <div className="inline-flex items-center gap-2 bg-[#174D32]/10 text-[#174D32] px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 rounded-full bg-[#F36B35]" />
              <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
                Natural Goodness, Every Day
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] tracking-tight text-[#292929] max-w-2xl">
              Make Every Meal
              <span className="block text-[#174D32] mt-2">
                Taste Better.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              Discover the goodness of natural seasonings, wholesome foods
              and flavourful blends made to bring more joy to your everyday
              cooking.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-9 w-full sm:w-auto">

              <Link
                to="/shop"
                className="primary-button w-full sm:w-auto group"
              >
                Explore Our Products
                <HiArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border-2 border-[#174D32] text-[#174D32] font-semibold hover:bg-[#174D32] hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Discover Tanik
              </Link>
            </div>

            {/* Brand Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mt-10">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <HiOutlineCheckCircle className="text-[#174D32] text-lg" />
                Natural Ingredients
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <HiOutlineCheckCircle className="text-[#174D32] text-lg" />
                Everyday Goodness
              </div>
            </div>
          </div>

          {/* RIGHT: Hero Image Composition */}
          <div className="relative w-full max-w-xl mx-auto lg:ml-auto">

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
              <img
                src="/spices.png"
                alt="A colourful selection of natural spices and seasonings"
                className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Top Image Card */}
            <div className="absolute -top-7 -right-3 sm:-right-7 w-28 h-28 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-[#FFF8EC] shadow-xl rotate-3">
              <img
                src="/tea-collection.png"
                alt="Healthy and delicious meals"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Image Card */}
            <div className="absolute -bottom-8 -left-3 sm:-left-8 w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-[#FFF8EC] shadow-xl -rotate-3">
              <img
                src="/pastry.jpg"
                alt="Delicious homemade pastries"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Accent */}
            <div className="absolute -top-8 left-10 w-16 h-16 rounded-full bg-[#F5C64B] -z-10" />

            {/* Bottom Brand Label */}
            <div className="absolute bottom-5 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
              <p className="text-xs text-gray-500 font-medium">
                Cook with confidence
              </p>
              <p className="text-sm font-bold text-[#174D32]">
                Flavour in every bite!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
