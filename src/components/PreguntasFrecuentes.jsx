import React, { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, CircularProgress, Box, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PreguntasFrecuentes() {
  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/", {
      headers: { Authorization: "Bearer ipss.get" }
    })
      .then(res => res.json())
      .then(data => {
        // La respuesta real es { data: [...] }
        if (Array.isArray(data.data)) setFaqs(data.data);
        else setFaqs([]);
      })
      .catch(() => setFaqs([]));
  }, []);

  if (!faqs) return <Box textAlign="center"><CircularProgress /></Box>;
  if (!Array.isArray(faqs) || faqs.length === 0) return <Typography align="center">No hay preguntas frecuentes.</Typography>;

  return (
    <Box my={4}>
      <Paper sx={{ p: 4, mb: 4, bgcolor: "#f9fafb" }}>
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          ¿Quiénes Somos?
        </Typography>
        {/* ...contenido... */}
      </Paper>
      <Typography variant="h4" align="center" gutterBottom>Preguntas Frecuentes</Typography>
      {faqs.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{faq.titulo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.respuesta}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};