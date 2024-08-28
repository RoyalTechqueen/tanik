import "./index.css";
import React from "react";
import Hero from "./components/hero";
import BestSeller from "./components/bestseller";
import Productpage from "./components/productpage";
import Header from "./header";
import Footer from "./footer";

const Home: React.FC = () => {
  return (
    <div className="bg-red-50">
      <Header />
      <Hero />
      <BestSeller />
      <Productpage />
      <Footer />
    </div>
  );
};

export default Home;
