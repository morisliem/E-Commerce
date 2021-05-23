import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useGlobalContext } from "./context";

const ItemImages = () => {
  const { image, index, setPicture, loading } = useGlobalContext();

  if (loading) {
    return <h3>Loading images...</h3>;
  }

  return (
    <section className="pict-section-center">
      {image.map((pic, picIndex) => {
        const { id, img } = pic;
        let position = "nextSlide";
        if (picIndex === index) {
          position = "activeSlide";
        }
        if (
          picIndex === index - 1 ||
          (index === 0 && picIndex === img.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <article className={position} key={id}>
            <img src={img} alt="" className="pict-product-img" />
          </article>
        );
      })}
      <button className="prev" onClick={() => setPicture(index, "previous")}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setPicture(index, "next")}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default ItemImages;
