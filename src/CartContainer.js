import React from "react";
import { useGlobalContext } from "./context";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
        <Link
          to="/"
          style={{
            textAlign: "center",
            marginLeft: "13.5rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
          className="filter-btn"
        >
          Back homepage
        </Link>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total}</span>
          </h4>
        </div>
        <button className="filter-btn" onClick={() => clearCart()}>
          clear cart
        </button>
        <Link to="/" className="filter-btn">
          Back homepage
        </Link>
      </footer>
    </section>
  );
};

export default CartContainer;
