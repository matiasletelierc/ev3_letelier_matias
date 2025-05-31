import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Quiénes Somos", path: "#quienes-somos" },
  { label: "Productos", path: "/productos" },
  { label: "Preguntas Frecuentes", path: "#faq" },
  { label: "Contacto", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="sticky" color="primary" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", letterSpacing: 1 }}>
          <img
            src="/logo.svg"
            alt="Logo"
            style={{ height: 32, marginRight: 8 }}
          />
          Tejelanas Vivi
        </Typography>
        <Box>
          {navItems.map((item) =>
            item.path.startsWith("#") ? (
              <Button
                key={item.label}
                color="inherit"
                onClick={() => {
                  const el = document.getElementById(item.path.replace("#", ""));
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                sx={{
                  fontWeight:
                    location.pathname === "/" &&
                    window.location.hash === item.path
                      ? "bold"
                      : "normal",
                }}
              >
                {item.label}
              </Button>
            ) : (
              <Button
                key={item.label}
                color="inherit"
                component={RouterLink}
                to={item.path}
                sx={{ fontWeight: location.pathname === item.path ? "bold" : "normal" }}
              >
                {item.label}
              </Button>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;