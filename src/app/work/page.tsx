// `app/work/page.tsx` is the UI for the `/work` URL
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function Page() {
  const hardcodedWork = [
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 3",
      descripcion: "Descripción del Elemento 3",
      imagen: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 4",
      descripcion: "Descripción del Elemento 4",
      imagen: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 5",
      descripcion: "Descripción del Elemento 5",
      imagen: "https://via.placeholder.com/150",
      url: "https://www.google.com",
    },
  ];

  return (
    <>
      <Container sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        {hardcodedWork.map((item, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia sx={{ height: 300 }} image={item.imagen} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.descripcion}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={`${item.url}`} target="blank">
                Go
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
}
