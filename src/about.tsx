
import React from "react";
import { Link } from "react-router-dom";
import {
  HiArrowRight,
  HiCheckCircle,
  HiSparkles,
} from "react-icons/hi2";

import Header from "./header";
import Footer from "./footer";

const values = [
  {
    number: "01",
    title: "Natural Ingredients",
    description:
      "We focus on natural ingredients and thoughtfully prepared products, without artificial ingredients or MSG in our seasonings.",
  },
  {
    number: "02",
    title: "Everyday Convenience",
    description:
      "From ready-to-use seasoning blends to easy pastry mixes, we make everyday cooking more convenient.",
  },
  {
    number: "03",
    title: "Quality & Good Taste",
    description:
      "We believe wholesome food should taste wonderful too. Every product is created with flavour and quality in mind.",
  },
];

const productRanges = [
  {
    title: "Seasonings & Spices",
    description:
      "Aromatic, everyday blends for meat, chicken, fish, rice, soups and more.",
    image: "/spices.png",
    category: "seasonings",
  },
  {
    title: "Pastry Mixes",
    description:
      "Convenient mixes for puff-puff, pancakes, buns and delicious cakes.",
    image: "/pastry.jpg",
    category: "pastry-mixes",
  },
  {
    title: "Healthy Teas",
    description:
      "Enjoy a comforting cup with our selection of nourishing tea blends.",
    image: "/tea-collection.png",
    category: "healthy-teas",
  },
  {
    title: "Cereal & Healthy Meals Options",
    description:
      "Wholesome flour and meal alternatives for your everyday kitchen.",
    image: "/cereal-collection.png",
    category: "healthy-meals",
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header />

      <main>
        {/* Hero section */}
        <section className="relative overflow-hidden bg-[#174D32]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#F5C64B]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#F36B35]/10 blur-3xl" />

          <div className="section-container relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div className="text-white">
              <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F5C64B]">
                <HiSparkles className="text-lg" />
                The Tanik Foods Story
              </p>

              <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
                Healthy Options,
                <span className="block text-[#F5C64B]">
                  Easy Cooking
                </span>
                
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/75 md:text-lg">
                At Tanik Foods, we believe that everyday meals deserve
                wholesome ingredients and wonderful flavour. We make products
                that help bring convenience, goodness and taste into your
                kitchen.
              </p>

              <Link
                to="/shop"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F5C64B] px-7 py-4 font-bold text-[#174D32] transition hover:bg-white"
              >
                Explore Our Products
                <HiArrowRight className="text-lg" />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-[#F5C64B]/50" />

              <div className="relative overflow-hidden rounded-[2rem] bg-[#F7F1E5]">
                <img
                  src="/spices.png"
                  alt="Tanik Foods natural spices and seasonings"
                  className="h-[350px] w-full object-cover sm:h-[440px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#103923]/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-semibold text-[#F5C64B]">
                    Made for your kitchen
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    Flavour in every meal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand introduction */}
        <section className="section-container py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
                Who We Are
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#174D32] md:text-5xl">
                Bringing natural goodness closer to your table.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
                <p>
                  Tanik Foods is a food brand built around the idea that
                  good food begins with good ingredients. We offer a range
                  of natural seasonings, spices and wholesome food products
                  designed to make everyday cooking enjoyable.
                </p>

                <p>
                  Our collection goes beyond seasonings. Whether you're
                  preparing a family meal, making a quick snack or enjoying
                  a warm cup of tea, we have products to complement different
                  moments in your kitchen.
                </p>

                <p>
                  Our goal is simple: to make quality food products accessible
                  while helping people enjoy flavourful and wholesome meals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/tea-collection.png"
                alt="Tanik Foods Cereal & Healthy Meals options"
                className="h-56 w-full rounded-2xl object-cover md:h-72"
              />

              <img
                src="/pastry.jpg"
                alt="Tanik Foods pastry mixes"
                className="mt-10 h-56 w-full rounded-2xl object-cover md:h-72"
              />
            </div>
          </div>
        </section>

        {/* Brand values */}
        <section className="bg-white py-20 md:py-24">
          <div className="section-container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
                What We Stand For
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-[#174D32] md:text-5xl">
                More than just good flavour.
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Everything we offer reflects our commitment to making
                everyday food preparation a little more enjoyable.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="rounded-2xl border border-[#174D32]/10 bg-[#FFF8EC] p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-sm font-extrabold text-[#F36B35]">
                    {value.number}
                  </span>

                  <div className="my-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#174D32]/10">
                    <HiCheckCircle className="text-2xl text-[#174D32]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#174D32]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product ranges */}
        <section className="section-container py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F36B35]">
                Discover Tanik Foods
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-[#174D32] md:text-5xl">
                Something good for every kitchen.
              </h2>

              <p className="mt-4 leading-7 text-gray-500">
                Explore our different product collections and find what
                works for your everyday meals.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-bold text-[#174D32] transition hover:text-[#F36B35]"
            >
              View All Products
              <HiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productRanges.map((range) => (
              <Link
                key={range.category}
                to={`/shop?category=${range.category}`}
                className="group overflow-hidden rounded-2xl border border-[#174D32]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-56 overflow-hidden bg-[#F7F1E5]">
                  <img
                    src={range.image}
                    alt={range.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#174D32]">
                    {range.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {range.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F36B35]">
                    Explore Collection
                    <HiArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#174D32] py-20 md:py-24">
          <div className="section-container text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F5C64B]">
              Bring home the goodness
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Make your everyday meals a little more special.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/70">
              Discover natural seasonings, convenient pastry mixes, healthy
              teas and wholesome meal options from Tanik Foods.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5C64B] px-8 py-4 font-bold text-[#174D32] transition hover:bg-white"
            >
              Shop Tanik Foods
              <HiArrowRight />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
