import React from "react";
import { Box, Container, Grid, Paper, Typography, Divider } from "@mui/material";
import ProductCarousel from "../components/ProductCarousel";
import ServiceCard from "../components/ServiceCard";
import QuienesSomos from "../components/QuienesSomos";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
import FloatingServiceCard from "../components/FloatingServiceCard";
import { productos } from "../data/productosData.js";


const Services = () => (
  <Box sx={{ bgcolor: "#f5f6fa", minHeight: "100vh", py: { xs: 2, md: 4 } }}>
    <Container maxWidth="md">
      <section id="quienes-somos">
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 4, bgcolor: "#fff" }}>
          <QuienesSomos />
        </Paper>
      </section>
      <section id="productos">
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          Servicios
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ mb: 4 }}>
          <ProductCarousel />
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {productos.map((p, i) => (
            <Grid key={i} sx={{ width: "100%", maxWidth: 480, mx: "auto" }}>
              <ServiceCard
                {...p}
                image={p.imgs[0]}
                product={p.nombre}
              />
            </Grid>
          ))}
        </Grid>
      </section>
      <section id="faq">
        <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, mt: 6, bgcolor: "#f9fafb" }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <PreguntasFrecuentes />
          </Box>
        </Paper>
      </section>
    </Container>
    {/* Muestra la primera tarjeta de producto como flotante */}
    <FloatingServiceCard
      image={productos[0].imgs[0]}
      title={productos[0].nombre}
      product={productos[0].nombre}
    />
  </Box>
);

export default Services;
