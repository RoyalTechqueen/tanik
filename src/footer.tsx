import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-200 text-red-600 py-12">
      <div className="max-w-screen-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tanik Foods</h3>
            <ul>
              <li className="mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/shop">Shop Now</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <Link to="#">Order Tracking</Link>
              </li>
              <li className="mb-2">
                <Link to="#">Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social handles</h3>
            <ul>
              <li className="mb-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61550854575528&mibextid=rS40aB7S9Ucbxw6v"
                    aria-label="Facebook"
                    target="blank"
                    className="hover:text-red-400 flex items-center gap-3"
                  >
                    <FaFacebook size={24} />
                    <span className="font-semibold text-black">Facebook</span>
                  </a>
                </div>
              </li>
              <li className="mb-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/tanik_foods?igsh=MWt6emN2M3B1MmxvNQ=="
                    aria-label="Instagram"
                    className="hover:text-red-400 flex items-center gap-3"
                    target="blank"
                  >
                    <FaInstagram size={24} />
                    <span className="font-semibold text-black">Instagram</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Tanik Foods. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
