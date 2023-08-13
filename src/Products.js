import React from "react";
import mindfulMaxLabel from "./MindfulMax_label.JPEG";

function Products() {
  return (
    <section className="products">
      <h2>Our Neutropic Products</h2>
      <figure className="product-images">
        <img
          src={mindfulMaxLabel}
          alt="MindfulMax supplement label"
          className="homeNeutropicImage"
        />
      </figure>
      <div className="product-details">
        <a
          href="https://d808b1-2.myshopify.com/products/nootropic-brain-focus-formula"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="shop-btn">Shop Now</button>
        </a>
      </div>
    </section>
  );
}

export default Products;
