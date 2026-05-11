import React, { useState } from "react";
import styles from "../styles/ProductCard.module.css";
import ProductList, { sampleProducts } from "./ProductList";

const ProductCard = ({ product, handleCart}) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ""}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

      
      <button data-testid={"product-" + product.id} onClick={() => handleCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
