"use client";

import React, { useState } from "react";
import styles from "./SingleProjectCard.module.scss";

interface SingleProjectCardProps {
  title: string;
  description: string;
  images: string[];
}

const SingleProjectCard: React.FC<SingleProjectCardProps> = ({ title, description, images }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((i) => (i + 1) % images.length);

  const goToSlide = (i: number) => setIndex(i);

  return (
    <div className={styles.card}>
      {/* Barra de indicadores abajo */}
      <div className={styles.carouselProgress}>
        {images.map((_, i) => (
          <div key={i} className={styles.carouselSegment} onClick={() => goToSlide(i)}>
            <div
              className={styles.fill}
              style={{ width: i === index ? "100%" : "0%" }}
            ></div>
          </div>
        ))}
      </div>

      {/* Carrusel de imagen */}
      <div className={styles.carouselContainer}>
        <div
          className={styles.imageCarousel}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className={styles.imageWrapper} key={i}>
              <img src={img} alt={`Imagen ${i + 1}`} />
            </div>
          ))}
        </div>

        <button className={`${styles.carouselBtn} ${styles.left}`} onClick={prevSlide}>‹</button>
        <button className={`${styles.carouselBtn} ${styles.right}`} onClick={nextSlide}>›</button>
      </div>

      {/* Encabezado y descripción arriba */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default SingleProjectCard;
