
import React from "react";
import Header from "./header";
import Hero from "./components/hero";
import CategorySection from "./components/categorysection";
import Productpage from "./components/productpage";
import Footer from "./footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8EC]">
      <Header />

      <main>
        <Hero />
        <CategorySection />
        <Productpage />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
