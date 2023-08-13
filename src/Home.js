import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Products from "./Products";
import ProductDescription from "./ProductDescription";
import "./index.css";

function Home() {
  return (
    <div className="home-content">
      <Header />
      <MainContent />
      <Products />
      <ProductDescription />
    </div>
  );
}

export default Home;
