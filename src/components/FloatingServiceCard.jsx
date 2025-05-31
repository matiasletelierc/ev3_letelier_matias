import React, { useState } from "react";
import { IconButton, Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const FloatingServiceCard = (props) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 80,
        height: 80,
        zIndex: 2000,
        bgcolor: "#fff",
        boxShadow: 6,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 0,
      }}
    >
      <IconButton
        size="small"
        onClick={() => setVisible(false)}
        sx={{
          position: "absolute",
          top: 2,
          right: 2,
          bgcolor: "#fff",
          "&:hover": { bgcolor: "#eee" },
          zIndex: 10,
        }}
        aria-label="Cerrar"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      {/* Solo la imagen del producto */}
      <Box
        component="img"
        src={props.image}
        alt={props.title}
        sx={{
          width: 48,
          height: 48,
          borderRadius: 1,
          objectFit: "cover",
          mb: 0.5,
        }}
      />
      {/* Botón de contacto minimalista */}
      <Tooltip title="Contáctanos" arrow>
        <IconButton
          size="small"
          color="primary"
          onClick={() =>
            (window.location.href = `/contact?producto=${encodeURIComponent(
              props.product
            )}`)
          }
          sx={{
            bgcolor: "#f5f5f5",
            "&:hover": { bgcolor: "#e0e0e0" },
            p: 0.5,
          }}
          aria-label="Contáctanos"
        >
          <ContactMailIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FloatingServiceCard;