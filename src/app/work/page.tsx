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
  Link,
} from "@nextui-org/react";
import { SectionTitle, WorkWrapper } from "@/components/styles";
import { myWorks } from "@/lib/constants";
import { Bebas_Neue } from "next/font/google";
import "tailwindcss/tailwind.css";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <WorkWrapper>
      <SectionTitle className={bebas_neue.className}>Work</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 grid-rows-4 auto-rows-[1fr] ">
        {myWorks.map((item, index) => (
          <Card
            key={index}
            isPressable={true}
            isHoverable={true}
            style={{ backgroundColor: "#040405" }}
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
                <p
                  style={{ color: "#A3AABF" }}
                  className="text-tiny uppercase font-bold"
                >
                  {item.title}
                </p>
              </div>
            </CardHeader>
            <Divider style={{ backgroundColor: "#A3AABF" }} />
            <CardBody>
              <p style={{ color: "#A3AABF" }} className="font-bold text-large">
                {item.subtitle}
              </p>
            </CardBody>
            <Divider style={{ backgroundColor: "#A3AABF" }} />
            <CardFooter>
              <p style={{ color: "#A3AABF" }} className="font-bold text-large">
                {item.description}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </WorkWrapper>
  );
}
