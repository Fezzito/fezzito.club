"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { SectionTitle, WorkWrapper } from "@/components/styles";
import { aboutMe } from "@/lib/constants";
import "tailwindcss/tailwind.css";

export default function Page() {
  return (
    <WorkWrapper>
      <SectionTitle>About</SectionTitle>
      <div className="max-w-[1260px] gap-2 px-8">
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-4 auto-rows-[1fr] ">
          {aboutMe.map((item: any, index: number) => (
            <Card isFooterBlurred className={item.className} key={index}>
              <CardHeader className="absolute bg-white/30 z-10 top-0 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">
                  {item.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                src={item.image}
                alt="A question mark"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              />
              <CardFooter className="absolute bg-pink-500/10 bottom-0 h-[200px] z-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-pink-600">
                <div>
                  <p className="text-black text-tiny">{item.descripcion}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </WorkWrapper>
  );
}
