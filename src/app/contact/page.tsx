"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { SectionTitle, WorkWrapper } from "@/components/styles";
import { mySocials } from "@/lib/constants";
import { Lato, Bebas_Neue } from "next/font/google";
import "tailwindcss/tailwind.css";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "900" });

export default function Page() {
  return (
    <WorkWrapper>
      <SectionTitle className={bebas_neue.className}>Contact</SectionTitle>
      <div className="max-w-[1260px] gap-2 px-8">
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-4 auto-rows-[1fr] ">
          {mySocials.map((item, index) => (
            <Card isFooterBlurred className={item.className} key={index}>
              <CardHeader className="absolute bg-white/30 z-10 top-0 flex-col items-start">
                <h4 className={lato.className}>{item.title}</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={item.image}
              />
              <CardFooter className="absolute bg-white/0  bottom-0 z-10 justify-between">
                <Button
                  className="bg-black/30 hover:bg-yellow-700 text-white font-bold"
                  radius="full"
                  size="md"
                >
                  <a href={`${item.url}`} target="blank">
                    GO
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </WorkWrapper>
  );
}
