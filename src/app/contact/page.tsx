"use client";
import React from "react";

import {
  AboutText,
  SectionTitle,
  WorkWrapper,
  GoBack,
  Card,
  ImageComponent,
} from "@/components/styles";
import { mySocials } from "@/lib/constants";
import { Bebas_Neue } from "next/font/google";
import "tailwindcss/tailwind.css";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <WorkWrapper className="contact">
      <SectionTitle className={bebas_neue.className}>Contact</SectionTitle>
      <GoBack href={"/"}>{"<<<back"}</GoBack>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 grid-rows-2 auto-rows-[1fr] ">
        {mySocials.map((item, index) => (
          <Card
            key={index}
            onClick={() => {
              window.open(item.url, "_blank");
            }}
            className="fromContact"
          >
            <AboutText fontSize="15px">{item.title}</AboutText>
            <ImageComponent src={item.imagen} />
          </Card>
        ))}
      </div>
    </WorkWrapper>
  );
}
