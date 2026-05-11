import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setIsDarkMode] = useState(false);
  // TODO: Implement state for cart management
  const [cart, setIsCart] = useState([]);
  // TODO: Implement state for category filtering
  const [categoryFilter, setCategoryFilter] = useState("all");

  function handleCart(product) {
    return setIsCart((prev) => [...prev, product]);
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <DarkModeToggle />
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <Cart cart={cart} />
      <ProductList handleCart={handleCart} categoryFilter={categoryFilter} />

      {/* TODO: Implement and render Cart component */}
    </div>
  );
};

export default App;
