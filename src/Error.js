import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="title">
      <h1>Error Page</h1>
      <Link to="/home" className="filter-btn">
        Back home
      </Link>
    </section>
  );
};

export default Error;
