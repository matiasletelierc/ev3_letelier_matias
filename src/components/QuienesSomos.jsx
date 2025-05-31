import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress, Box, Avatar, Divider } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const QuienesSomos = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/", {
      headers: { Authorization: "Bearer ipss.get" }
    })
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.data === "string") setInfo(data.data);
        else setInfo(null);
      })
      .catch(() => setInfo(null));
  }, []);

  if (info === null)
    return (
      <Box textAlign="center" my={6}>
        <CircularProgress />
      </Box>
    );

  return (
    <Card
      sx={{
        maxWidth: 700,
        mx: "auto",
        my: 4,
        borderRadius: 4,
        boxShadow: 8,
        bgcolor: "#f9fafb",
        p: { xs: 2, md: 3 },
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56, mb: 1 }}>
          <InfoIcon fontSize="large" />
        </Avatar>
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          ¿Quiénes Somos?
        </Typography>
        <Divider sx={{ width: 60, mb: 2, bgcolor: "primary.main" }} />
      </Box>
      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: 18, textAlign: "center", lineHeight: 1.7 }}
        >
          {typeof info === "string" ? info : "No hay información disponible."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuienesSomos;