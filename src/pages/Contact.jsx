import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Alert, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [producto, setProducto] = useState("");
  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

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
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (!validateEmail(email)) {
      setError("El email no es válido.");
      return;
    }
    setError("");
    // Aquí deberías enviar los datos al servidor
    setEnviado(true);
  };

  if (enviado) {
    return <Alert severity="success">¡Gracias por contactarnos!</Alert>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <Paper
        elevation={8}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: 6,
          mx: "auto",
          my: 6,
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Contacto
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          {producto && (
            <TextField
              label="Producto"
              value={producto}
              InputProps={{ readOnly: true }}
              name="producto"
              sx={{ bgcolor: "#f5f5f5" }}
            />
          )}
          <TextField
            label="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            name="nombre"
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            required
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
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;