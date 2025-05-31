import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { productos } from "../data/productosData.js"; 

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [producto, setProducto] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  // Leer el query param "producto"
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const prod = params.get("producto") || "";
    setProducto(prod);
  }, [location.search]);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Honeypot
    if (e.target.website.value) return;
    if (!nombre.trim() || !email.trim() || !mensaje.trim() || !producto.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (!validateEmail(email)) {
      setError("El email no es válido.");
      return;
    }
    setError("");
    setEnviando(true);
    // Simulación de envío
    setTimeout(() => {
      setEnviado(true);
      setEnviando(false);
    }, 1200);
  };

  if (enviado) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
        <Alert severity="success" sx={{ fontSize: "1.1rem" }}>
          ¡Gracias por contactarnos! Te responderemos pronto.
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <Paper
        elevation={8}
        sx={{
          p: { xs: 2, sm: 4 },
          maxWidth: 420,
          width: "100%",
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 6,
          mx: "auto",
          my: 6,
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary" sx={{ fontWeight: 700 }}>
            Contacto
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}

          <FormControl fullWidth required sx={{ bgcolor: "#f5f5f5" }}>
            <InputLabel id="producto-label">Producto</InputLabel>
            <Select
              labelId="producto-label"
              label="Producto"
              value={producto}
              onChange={e => setProducto(e.target.value)}
              name="producto"
            >
              {productos.map((p) => (
                <MenuItem key={p.nombre} value={p.nombre}>
                  {p.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            name="nombre"
            required
            autoComplete="name"
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            required
            autoComplete="email"
          />
          <TextField
            label="Mensaje"
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
            name="mensaje"
            multiline
            minRows={3}
            required
          />
          {/* Campo honeypot oculto para bots */}
          <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={enviando}
            sx={{ fontWeight: "bold", fontSize: "1rem", py: 1, borderRadius: 2, mt: 1 }}
          >
            {enviando ? <CircularProgress size={24} color="inherit" /> : "Enviar"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;