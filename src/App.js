import React, { useState } from "react";
import Product from "./Product";
import Categories from "./Categories";
import items from "./list";
const allCategories = [
  "Show all",
  ...new Set(items.map((item) => item.category)),
];

const App = () => {
  const [item, setItem] = useState(items);
  const [category, setCategory] = useState(allCategories);

  const filterItem = (id) => {
    const newItem = item.filter((it) => it.id === id);
    setItem(newItem);
  };
  const filterCategory = (category) => {
    if (category === "Show all") {
      setItem(items);
      return;
    }
    const newCategory = items.filter((item) => item.category === category);
    setItem(newCategory);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our product</h2>
          <div className="underline"></div>
          <Categories category={category} filterCategory={filterCategory} />
          <Product items={item} filterItem={filterItem} />
        </div>
      </section>
    </main>
  );
};

export default App;
