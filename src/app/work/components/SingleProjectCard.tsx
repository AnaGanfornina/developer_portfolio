"use client";
import React, { useState, useEffect, useRef } from "react";

interface SingleProjectCardProps {
  title: string;
  description: string;
  images: string[];
}

const SingleProjectCard: React.FC<SingleProjectCardProps> = ({ title, description, images }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const SLIDE_DURATION = 5000; // 5 segundos por imagen

  useEffect(() => {
    if (isPaused) return;

    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;
      
      if (newProgress >= 100) {
        setIndex((i) => (i + 1) % images.length);
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    };

    intervalRef.current = setInterval(updateProgress, 16); // ~60fps

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index, isPaused, images.length]);

  const prevSlide = () => {
    setProgress(0);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setProgress(0);
    setIndex((i) => (i + 1) % images.length);
  };

  const goToSlide = (i: number) => {
    setProgress(0);
    setIndex(i);
  };

  return (
    <div style={styles.card}>
      {/* Encabezado y descripción arriba */}
      <div style={styles.header}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>

      {/* Carrusel de imagen */}
      <div
        style={styles.carouselContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="carousel-container"
      >
        <div
          style={{
            ...styles.imageCarousel,
            transform: `translateX(-${index * 100}%)`
          }}
        >
          {images.map((img, i) => (
            <div style={styles.imageWrapper} key={i}>
              <img src={img} alt={`Slide ${i + 1}`} style={styles.image} />
            </div>
          ))}
        </div>
        <button
          style={{ ...styles.carouselBtn, ...styles.left }}
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          style={{ ...styles.carouselBtn, ...styles.right }}
          onClick={nextSlide}
        >
          ›
        </button>
      </div>

      {/* Barra de indicadores */}
      <div style={styles.carouselProgress}>
        {images.map((_, i) => (
          <div
            key={i}
            style={styles.carouselSegment}
            onClick={() => goToSlide(i)}
          >
            <div
              style={{
                ...styles.fill,
                width: i === index ? `${progress}%` : i < index ? "100%" : "0%",
                transition: i === index ? "none" : "width 0.3s ease"
              }}
            />
          </div>
        ))}
      </div>

      {/* Botón See More */}
      <button style={styles.seeMoreBtn}>See more</button>

      <style jsx>{`
        .carousel-container:hover button {
          opacity: 1 !important;
        }
        button:hover {
          background: rgba(0, 0, 0, 0.7) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
      `}</style>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    background: "linear-gradient(180deg, #e5dff5 0%, #ffffff 100%)",
    borderRadius: "24px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    color: "#000",
    position: "relative",
    margin: "32px auto",
    width: "100%",
    maxWidth: "1200px",
    padding: 0
  },
  header: {
    padding: "32px 32px 24px 32px",
    zIndex: 2
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 600,
    margin: 0,
    letterSpacing: "-0.02em",
    color: "#000"
  },
  description: {
    fontSize: "1rem",
    marginTop: "12px",
    color: "#666",
    lineHeight: "1.6",
    maxWidth: "600px"
  },
  carouselContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    display: "flex",
    height: "500px",
    cursor: "pointer",
    margin: "0 32px 24px 32px",
    width: "calc(100% - 64px)"
  },
  imageCarousel: {
    display: "flex",
    width: "100%",
    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
  },
  imageWrapper: {
    minWidth: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block"
  },
  carouselBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(8px)",
    border: "none",
    color: "white",
    fontSize: "32px",
    width: "48px",
    height: "48px",
    cursor: "pointer",
    borderRadius: "50%",
    zIndex: 10,
    opacity: 0,
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 300
  },
  left: {
    left: "16px"
  },
  right: {
    right: "16px"
  },
  carouselProgress: {
    display: "flex",
    width: "calc(100% - 64px)",
    margin: "0 32px 24px 32px",
    gap: "6px"
  },
  carouselSegment: {
    flex: 1,
    height: "3px",
    borderRadius: "2px",
    background: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative"
  },
  fill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    background: "#000",
    borderRadius: "2px"
  },
  seeMoreBtn: {
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "14px 32px",
    fontSize: "0.95rem",
    fontWeight: 500,
    cursor: "pointer",
    margin: "0 32px 32px 32px",
    transition: "all 0.3s ease",
    width: "fit-content"
  }
};

export default SingleProjectCard;