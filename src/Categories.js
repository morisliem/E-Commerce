import React from "react";

const Categories = ({ category, filterCategory }) => {
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
