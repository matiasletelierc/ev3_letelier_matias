import React from "react";
import Slider from "react-slick";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import { productos } from "../data/productosData.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./ServiceCard";

// Flechas personalizadas
function Arrow(props) {
  const { className, style, onClick, direction } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        borderRadius: "50%",
        border: "1px solid #ccc",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        width: 36,
        height: 36,
        zIndex: 2,
        top: "calc(50% - 18px)",
        [direction === "left" ? "left" : "right"]: 8,
      }}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
      onClick={onClick}
    />
  );
}

const ProductCarousel = () => {
  const theme = useTheme();

  // Genera el array de imágenes a partir de los productos
  const images = productos.map((prod) => ({
    src: prod.imgs?.[0],
    alt: prod.nombre,
    title: prod.nombre,
    description: prod.descripcion,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3500,
    swipe: true,
    touchMove: true,
    pauseOnHover: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
    appendDots: (dots) => (
      <Box sx={{ pb: 1 }}>
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {dots}
        </ul>
      </Box>
    ),
    customPaging: (i) => (
      <span
        style={{
          display: "inline-block",
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: theme.palette.primary.main,
          opacity: 0.4,
        }}
      />
    ),
  };

  return (
    <Box
      sx={{
        maxWidth: 420,
        mx: "auto",
        my: 3,
        boxShadow: 4,
        borderRadius: 3,
        bgcolor: "#fff",
        p: { xs: 1, sm: 2 },
      }}
      role="region"
      aria-label="Carrusel de productos"
    >
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box key={idx} sx={{ outline: "none", position: "relative" }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: 260,
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              }}
              tabIndex={0}
            />
            {(img.title || img.description) && (
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  bgcolor: "rgba(0,0,0,0.55)",
                  color: "#fff",
                  p: 2,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                }}
              >
                {img.title && (
                  <Typography variant="subtitle1" fontWeight="bold">
                    {img.title}
                  </Typography>
                )}
                {img.description && (
                  <Typography variant="body2">{img.description}</Typography>
                )}
              </Box>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;


