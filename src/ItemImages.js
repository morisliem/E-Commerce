import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ItemImages = ({ picture }) => {
  const [img, setImg] = useState(picture);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lastIndex = img.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, img]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // if (loading) {
  //   return <h3>Loading images...</h3>;
  // }

  return (
    <section className="pict-section-center">
      {img.map((pic, picIndex) => {
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
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default ItemImages;
