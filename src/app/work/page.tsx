// `app/work/page.tsx` is the UI for the `/work` URL
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import nave from "../../../public/nave1.png";
import nave2 from "../../../public/nave2.png";
import smoke1 from "../../../public/smoke1.png";

export default function Page() {
  const hardcodedWork = [
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: "../../../public/nave1.png",
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 3",
      descripcion: "Descripción del Elemento 3",
      imagen: smoke1.src,
      url: "../../../public/smoke1.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: "../../../public/nave1.png",
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 3",
      descripcion: "Descripción del Elemento 3",
      imagen: smoke1.src,
      url: "../../../public/smoke1.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: "../../../public/nave1.png",
      url: "https://www.google.com",
    },
  ];
  const heights = [
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
  ];
  return (
    <>
      {typeof window !== "undefined" && (
        <Masonry
          columns={4}
          spacing={2}
          defaultHeight={450}
          defaultColumns={4}
          defaultSpacing={1}
        >
          {hardcodedWork.map((item, index) => (
            <Card sx={{ maxWidth: 345, height: heights }} key={index}>
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
        </Masonry>
      )}
    </>
  );
}
