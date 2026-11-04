
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import About from "./about";
import AppLayout from "./applayout";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Contact from "./components/contact";
import Home from "./home";
import Shop from "./components/shop";
import ProductDetails from "./components/productdetails";
import ScrollToTop from "./components/scroltop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
          <Route
            path="product/:id"
            element={<ProductDetails />}
          />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
};

export default App;
