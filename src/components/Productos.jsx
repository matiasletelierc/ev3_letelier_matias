import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Button,
  CardActions,
  Tooltip,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

const fallbackImg = "https://via.placeholder.com/400x160?text=Sin+Imagen";

const Productos = () => {
  const [productos, setProductos] = useState(null);
  const [servicios, setServicios] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulación de fetch con los datos proporcionados
    const data = {
      productos: [
        {
          id: 1,
          nombre: "Falda a Crochet",
          descripcion:
            "Transforma tu estilo con esta hermosa falda tejida a crochet, una pieza artesanal que irradia encanto y delicadeza. Confeccionada con esmero en un suave tono crema, esta falda es el complemento perfecto para cualquier ocasión, desde un paseo relajado hasta un evento especial.",
          tallas: ["S", "M", "L", "XL"],
          colores: ["crema", "verde esmeralda"],
          precio: 9990,
          imgs: [
            "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/imgs/productos/faldaCrochet1.png",
          ],
        },
        {
          id: 2,
          nombre: "Ovillo de Lana Merino Gigante",
          descripcion:
            "Este tipo de lana es conocida por su suavidad y por ser muy gruesa, ideal para técnicas como el 'arm knitting' (tejer con los brazos) o mantas de tejido grueso.",
          tallas: [],
          colores: ["azul", "fucsia", "beige", "magenta"],
          precio: 4990,
          imgs: [
            "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/imgs/productos/ovillolanaColor.png",
          ],
        },
        {
          id: 3,
          nombre: "Árbol con follaje de colores",
          descripcion:
            "Las 'hojas' o 'frutos' del árbol son círculos concéntricos de diferentes colores vibrantes que le dan un toque artístico y abstracto.",
          tallas: [],
          colores: [],
          precio: 14990,
          imgs: [
            "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/imgs/productos/cuadro1.png",
          ],
        },
      ],
      servicios: [
        {
          id: 1,
          nombre: "Taller Telar Decorativo Junio 2025",
          ubicacion: "Mall Vivo, Avda La florida Rojas Magallanes",
          cupos: 50,
          fecha: "08/06/2025",
          imgs: [
            "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/imgs/servicios/taller1.png",
          ],
        },
        {
          id: 2,
          nombre: "Taller Telar Decorativo Julio 2025",
          ubicacion: "Laguna de Zapallar",
          cupos: 100,
          fecha: "20/07/2025",
          imgs: [
            "https://www.clinicatecnologica.cl/ipss/tejelanasVivi/imgs/servicios/taller2.png",
          ],
        },
      ],
    };
    setProductos(data.productos);
    setServicios(data.servicios);
  }, []);

  if (!productos || !servicios)
    return (
      <Box textAlign="center" my={6}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box my={6}>
      <Typography variant="h4" align="center" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
        Productos
      </Typography>
      <Divider sx={{ mb: 4, mx: "auto", width: 120, borderColor: "primary.main" }} />
      <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
        {productos.map((prod) => (
          <Grid key={prod.id} sx={{ width: "100%", maxWidth: 340, mx: "auto" }}>
            <Card
              sx={{
                borderRadius: 5,
                boxShadow: 6,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                  boxShadow: 16,
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: "#fafbfc",
                border: "1px solid #f0f0f0",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={prod.imgs?.[0] || fallbackImg}
                alt={prod.nombre}
                loading="lazy"
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  background: "#eee",
                  borderBottom: "1px solid #f0f0f0",
                }}
              />
              <CardContent sx={{ pb: 1.5 }}>
                <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600, fontSize: "1.15rem" }}>
                  {prod.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48, mb: 1 }}>
                  {prod.descripcion}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
                  {prod.tallas.length > 0 && (
                    <Chip label={`Tallas: ${prod.tallas.join(", ")}`} size="small" color="info" />
                  )}
                  {prod.colores.length > 0 && (
                    <Chip label={`Colores: ${prod.colores.join(", ")}`} size="small" color="success" />
                  )}
                  <Chip
                    label={`$${prod.precio.toLocaleString()}`}
                    size="small"
                    color="warning"
                    sx={{ fontWeight: 700 }}
                  />
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Tooltip title="Ir al formulario de contacto" arrow>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    startIcon={<ContactMailIcon />}
                    sx={{
                      fontWeight: "bold",
                      borderRadius: 2,
                      boxShadow: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                      py: 1,
                      letterSpacing: 0.5,
                    }}
                    onClick={() =>
                      navigate(`/contact?producto=${encodeURIComponent(prod.nombre)}`)
                    }
                  >
                    Contáctanos
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
        Talleres y Servicios
      </Typography>
      <Divider sx={{ mb: 4, mx: "auto", width: 180, borderColor: "primary.main" }} />
      <Grid container spacing={4} justifyContent="center">
        {servicios.map((serv) => (
          <Grid key={serv.id} sx={{ width: "100%", maxWidth: 340, mx: "auto" }}>
            <Card
              sx={{
                borderRadius: 5,
                boxShadow: 6,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.03)",
                  boxShadow: 16,
                },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: "#fafbfc",
                border: "1px solid #f0f0f0",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={serv.imgs?.[0] || fallbackImg}
                alt={serv.nombre}
                loading="lazy"
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  background: "#eee",
                  borderBottom: "1px solid #f0f0f0",
                }}
              />
              <CardContent sx={{ pb: 1.5 }}>
                <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600, fontSize: "1.15rem" }}>
                  {serv.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48, mb: 1 }}>
                  {serv.ubicacion && <><b>Ubicación:</b> {serv.ubicacion}<br /></>}
                  {serv.fecha && <><b>Fecha:</b> {serv.fecha}<br /></>}
                  {serv.cupos && <><b>Cupos:</b> {serv.cupos}</>}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Tooltip title="Ir al formulario de contacto" arrow>
                  <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    startIcon={<ContactMailIcon />}
                    sx={{
                      fontWeight: "bold",
                      borderRadius: 2,
                      boxShadow: 2,
                      textTransform: "none",
                      fontSize: "1rem",
                      py: 1,
                      letterSpacing: 0.5,
                    }}
                    onClick={() =>
                      navigate(`/contact?producto=${encodeURIComponent(serv.nombre)}`)
                    }
                  >
                    Contáctanos
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Productos;