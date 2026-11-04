
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "./store";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const cartItemCount = useCartStore(
    (state) => state.getCartItemCount()
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  const closeMenu = () => setShowMenu(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-[#FFF8EC] py-3"
        }`}
      >
        <div className="section-container flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex-shrink-0"
          >
            <img
              src="/logo.png"
              alt="Tanik Foods"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#174D32]"
                      : "text-gray-600 hover:text-[#174D32]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <Link
              to="/cart"
              aria-label={`Shopping cart, ${cartItemCount} items`}
              className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#EAE3D7] hover:bg-[#174D32] hover:text-white transition-all duration-300 group"
            >
              <IoCartOutline className="w-6 h-6 text-[#174D32] group-hover:text-white" />

              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-[#F36B35] text-white text-[10px] font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Desktop CTA */}
            <Link
              to="/shop"
              className="hidden md:inline-flex primary-button text-sm"
            >
              Shop Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-[#174D32] text-white"
              aria-label={showMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMenu}
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <HiOutlineX className="text-2xl" />
              ) : (
                <HiOutlineMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          showMenu
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
          className="absolute inset-0 bg-black/40"
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#FFF8EC] shadow-xl transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#EAE3D7]">
            <img
              src="/logo.png"
              alt="Tanik Foods"
              className="h-14 w-auto object-contain"
            />

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#174D32]"
            >
              <HiOutlineX className="text-2xl" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-5 py-4 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-[#174D32] text-white"
                      : "text-gray-700 hover:bg-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/cart"
              onClick={closeMenu}
              className="px-5 py-4 rounded-xl text-base font-semibold text-[#174D32] flex items-center justify-between"
            >
              <span className="flex items-center gap-3">
                <IoCartOutline className="text-xl" />
                My Cart
              </span>

              {cartItemCount > 0 && (
                <span className="bg-[#F36B35] text-white text-xs px-2.5 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>

          <div className="absolute bottom-8 left-6 right-6">
            <p className="text-[#174D32] font-bold text-lg">
              Good food. Natural goodness.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Bringing flavour to your everyday meals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
