import React from "react";
import ItemImg from "./ItemImages";
import { useGlobalContext } from "./context";
import ShoppingCart from "./CartContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Product = () => {
  const { product, filterItem, addToCart } = useGlobalContext();

  if (product.length === 1) {
    const [{ brand, name, desc, price, img, id }] = product;

    return (
      <section style={{ marginLeft: "200px", marginRight: "200px" }}>
        <ItemImg />
        <header
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            borderBottom: "1px dotted",
          }}
        >
          <div>
            <h4 style={{ marginTop: "20px" }}>{brand}</h4>
            <p style={{ fontSize: "12px" }}>
              <em>{name}</em>
            </p>
          </div>
        </header>
        <p style={{ marginRight: "100px", marginLeft: "100px" }}> {desc}</p>
        <h4 className="price">$ {price}</h4>
        <Link
          to="/shopping_cart"
          className="filter-btn"
          onClick={() => addToCart(price, name, img, id)}
        >
          Buy now
        </Link>
        <button
          type="button"
          className="filter-btn"
          onClick={() => addToCart(price, name, img, id)}
        >
          Add to cart
        </button>
      </section>
    );
  }
  return (
    <section className="section-center">
      {product.map((item) => {
        const { brand, name, id, desc, img, price } = item;
        return (
          <div key={id} className="product-item" onClick={() => filterItem(id)}>
            <img src={img} alt={brand} className="photo" />
            <div className="product-info">
              <header>
                <div style={{ display: "block", textAlign: "left" }}>
                  <h4>{brand}</h4>
                  <p style={{ fontSize: "12px" }}>
                    <em>{name}</em>
                  </p>
                </div>
                <h4 className="price">$ {price}</h4>
              </header>
              <p className="product-text">{desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
