// `app/work/page.tsx` is the UI for the `/work` URL
"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Divider,
  CardBody,
} from "@nextui-org/react";
import {
  SectionTitle,
  WorkWrapper,
  AboutText,
  GoBack,
} from "@/components/styles";
import { myWorks } from "@/lib/constants";
import { Bebas_Neue } from "next/font/google";
import "tailwindcss/tailwind.css";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <WorkWrapper className="work">
      <GoBack href={"/"}>{"<<<back"}</GoBack>
      <SectionTitle className={bebas_neue.className}>Work</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[1fr] ">
        {myWorks.map((item, index) => (
          <Card
            key={index}
            isPressable={true}
            isHoverable={true}
            style={{
              backgroundColor: "#d9d9d9",
              border: "solid 1px #A3AABF",
              borderRadius: "10px",
            }}
            onPress={() => {
              window.open(item.url, "_blank");
            }}
          >
            <CardHeader className="flex gap-3">
              <Image
                alt="a black and white icon of a pen"
                height={50}
                radius="lg"
                src={item.imagen}
                width={50}
              />
              <div className="flex flex-col">
                <AboutText
                  style={{ color: "#040404" }}
                  className="text-tiny uppercase font-bold"
                >
                  {item.title}
                </AboutText>
              </div>
            </CardHeader>
            <Divider style={{ backgroundColor: "#A3AABF" }} />
            <CardBody>
              <AboutText
                style={{ color: "#040404" }}
                className="font-bold text-large"
              >
                {item.subtitle}
              </AboutText>
            </CardBody>
            <Divider style={{ backgroundColor: "#A3AABF" }} />
            <CardFooter>
              <AboutText
                style={{ color: "#040404" }}
                className="font-bold text-large"
              >
                {item.description}
              </AboutText>
            </CardFooter>
          </Card>
        ))}
      </div>
    </WorkWrapper>
  );
}
