"use client";
import React from "react";
import { Card, CardHeader, Image, CardBody, Divider } from "@nextui-org/react";
import {
  AboutText,
  SectionTitle,
  WorkWrapper,
  GoBack,
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 grid-rows-4 auto-rows-[1fr] ">
        {mySocials.map((item, index) => (
          <Card
            key={index}
            isPressable={true}
            style={{
              backgroundColor: "#d9d9d9",
              width: "220px",
              height: "220px",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            onPress={() => {
              window.open(item.url, "_blank");
            }}
          >
            <Image
              alt="nextui logo"
              height={99}
              radius="lg"
              src={item.image}
              width={99}
            />
            <Divider style={{ backgroundColor: "#A3AABF" }} />
            <AboutText>{item.title}</AboutText>
          </Card>
        ))}
      </div>
    </WorkWrapper>
  );
}
