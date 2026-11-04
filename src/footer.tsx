import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#103923] text-white">
      {/* Main footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
          <Link to="/" className="inline-flex items-baseline gap-2">
  <span className="text-4xl font-black tracking-tight text-white">
    TANIK
  </span>
  <span className="text-xl font-bold tracking-wider text-[#F5C64B]">
    FOODS
  </span>
</Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
              Bringing natural goodness and delicious flavour into your everyday
              kitchen. Discover seasonings, pastry mixes, healthy teas and
              wholesome meal options.
            </p>

            <div className="mt-6 flex items-center gap-3">
            
              <a
                href="https://www.instagram.com/tanikfoods/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tanik Foods on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#F5C64B] hover:bg-[#F5C64B] hover:text-[#103923]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/2347036104433"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Tanik Foods on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#F5C64B] hover:bg-[#F5C64B] hover:text-[#103923]"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#F5C64B]">
              Explore
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <Link to="/" className="transition hover:text-[#F5C64B]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="transition hover:text-[#F5C64B]">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-[#F5C64B]">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-[#F5C64B]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#F5C64B]">
              Our Collections
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li>
                <Link
                  to="/shop?category=seasonings"
                  className="transition hover:text-[#F5C64B]"
                >
                  Seasonings & Spices
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=pastry-mixes"
                  className="transition hover:text-[#F5C64B]"
                >
                  Pastry Mixes
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=healthy-teas"
                  className="transition hover:text-[#F5C64B]"
                >
                  Healthy Teas
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=healthy-meals"
                  className="transition hover:text-[#F5C64B]"
                >
                  Cereal & Healthy Meal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#F5C64B]">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="https://wa.me/2347036104433"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <FaWhatsapp className="mt-1 shrink-0 text-lg text-[#F5C64B]" />
                <span>
                  <span className="block text-xs text-white/50">
                    WhatsApp Orders
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white transition group-hover:text-[#F5C64B]">
                    +234 703 610 4433
                  </span>
                </span>
              </a>

              <a
                href="tel:07036104433"
                className="group flex items-start gap-3"
              >
                <HiOutlinePhone className="mt-1 shrink-0 text-xl text-[#F5C64B]" />
                <span>
                  <span className="block text-xs text-white/50">Call Us</span>
                  <span className="mt-1 block text-sm font-semibold text-white transition group-hover:text-[#F5C64B]">
                    0703 610 4433
                  </span>
                </span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-[#F5C64B] transition hover:text-white"
              >
                More Contact Information
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Brand message */}
        <div className="mt-16 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-extrabold text-white md:text-3xl">
                Healthy Options,{" "}
                <span className="text-[#F5C64B]">Easy Cooking.</span>
              </p>
              <p className="mt-2 text-sm text-white/55">
                Make every meal a little more special with Tanik Foods.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#F5C64B] px-6 py-3 text-sm font-bold text-[#103923] transition hover:bg-white"
            >
              Shop Now
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-[#0B2C1C]">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Tanik Foods. All rights reserved.
          </p>

          <p className="text-xs font-medium text-white/50">
            Made with care, for your kitchen.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
