"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  CardBody,
  Divider,
  Link,
} from "@nextui-org/react";
import { SectionTitle, WorkWrapper } from "@/components/styles";
import { mySocials } from "@/lib/constants";
import { Lato, Bebas_Neue } from "next/font/google";
import "tailwindcss/tailwind.css";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <WorkWrapper>
      <SectionTitle className={bebas_neue.className}>Contact</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 grid-rows-4 auto-rows-[1fr] ">
        {mySocials.map((item, index) => (
          <Card
            key={index}
            isPressable={true}
            style={{ backgroundColor: "#4C4C4C" }}
          >
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={50}
                radius="lg"
                src={item.image}
                width={50}
              />
              <div className="flex flex-col">
                <p className="text-tiny uppercase font-bold">{item.title}</p>
              </div>
            </CardHeader>
            <Divider style={{ backgroundColor: "#A3AABF" }} />
            <CardBody>
              <p className="font-bold text-large">{item.title}</p>
            </CardBody>
            <Divider style={{ backgroundColor: "#A3AABF" }} />
            <CardFooter>
              <Link isExternal showAnchorIcon href={`${item.url}`}>
                Visit.
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </WorkWrapper>
  );
}
