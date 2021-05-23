import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { shopping_cart_status, homepage_status } = useGlobalContext();
  return (
    <nav>
      <ul className="btn-container">
        <li className="filter-btn">
          <Link to="/">Home</Link>
        </li>
        <li className="filter-btn">
          <Link to="/shopping_cart">Shopping cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
