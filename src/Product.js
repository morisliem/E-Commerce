import React, { useState, useEffect } from "react";
import pictures from "./listImg";
import ItemImg from "./ItemImages";
const itemPict = [
  ...new Set(
    pictures.map((pict) => {
      return pict.id, pict.image;
    })
  ),
];

const Product = ({ items, filterItem }) => {
  if (items.length === 1) {
    const [{ id, brand, name, desc, price }] = items;
    const x = pictures.filter((item) => item.id === id);
    const picture = x[0].image;

    return (
      <section style={{ marginLeft: "200px", marginRight: "200px" }}>
        <ItemImg picture={picture} />
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
        <button
          type="button"
          className="filter-btn"
          onClick={() => alert(`The item is $ ${price}`)}
        >
          Buy now
        </button>
        <a href="" className="filter-btn">
          Add to cart
        </a>
      </section>
    );
  }
  return (
    <section className="section-center">
      {items.map((item) => {
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
