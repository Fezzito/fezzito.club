// `app/work/page.tsx` is the UI for the `/work` URL
"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Masonry from "react-masonry-css";
import nave2 from "../../../public/nave2.png";
import smoke1 from "../../../public/smoke1.png";
import { NavItem, WorkWrapper } from "@/components/styles";

export default function Page() {
  const hardcodedWork = [
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: smoke1.src,
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: smoke1.src,
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: smoke1.src,
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: smoke1.src,
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: smoke1.src,
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: smoke1.src,
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
    {
      titulo: "Elemento 1",
      descripcion: "Descripción del Elemento 1",
      imagen: smoke1.src,
      url: "https://www.google.com",
    },
    {
      titulo: "Elemento 2",
      descripcion: "Descripción del Elemento 2",
      imagen: nave2.src,
      url: "../../../public/nave2.png",
    },
  ];
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <WorkWrapper>
      <NavItem>Work</NavItem>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {hardcodedWork.map((item, index) => (
          <Card
            sx={{ maxWidth: 345, height: 345 }}
            key={index}
            className="grid"
          >
            <CardMedia sx={{ height: 200 }} image={item.imagen} />
            <CardContent>
              <p>{item.titulo}</p>
              <p>{item.descripcion}</p>
            </CardContent>
            <CardActions>
              <Button href={`${item.url}`} target="blank">
                Go
              </Button>
            </CardActions>
          </Card>
        ))}
      </Masonry>
    </WorkWrapper>
  );
}
