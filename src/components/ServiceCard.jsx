import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  Chip,
  Stack,
  Tooltip,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  image,
  title,
  description,
  product,
  tallas = [],
  colores = [],
  precio,
  sx = {},
}) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 4,
        bgcolor: "#fff",
        minHeight: 220,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...sx,
      }}
    >
      {image && (
        <CardMedia
          component="img"
          height="120"
          image={image}
          alt={title}
          loading="lazy"
          sx={{
            objectFit: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            background: "#eee",
          }}
        />
      )}
      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="h6" color="primary" gutterBottom sx={{ fontSize: "1rem" }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.92rem", minHeight: 32 }}>
            {description}
          </Typography>
        )}
        <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap" }}>
          {tallas.length > 0 && (
            <Chip label={`Tallas: ${tallas.join(", ")}`} size="small" color="info" />
          )}
          {colores.length > 0 && (
            <Chip label={`Colores: ${colores.join(", ")}`} size="small" color="success" />
          )}
          {precio && (
            <Chip label={`$${precio.toLocaleString()}`} size="small" color="warning" />
          )}
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 1, pt: 0 }}>
        <Tooltip title="Ir al formulario de contacto" arrow>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<ContactMailIcon />}
            sx={{
              fontWeight: "bold",
              borderRadius: 2,
              boxShadow: 1,
              textTransform: "none",
              fontSize: "0.92rem",
              py: 0.5,
            }}
            onClick={() =>
              navigate(`/contact?producto=${encodeURIComponent(product)}`)
            }
          >
            Contáctanos
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;