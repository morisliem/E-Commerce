import React from "react";
import { useGlobalContext } from "./context";

const Categories = () => {
  const { filterCategory, category } = useGlobalContext();
  return (
    <div className="btn-container">
      {category.map((cat, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterCategory(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
