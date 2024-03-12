"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { SectionTitle, WorkWrapper } from "@/components/styles";
import { mySocials } from "@/lib/constants";
import "tailwindcss/tailwind.css";

export default function Page() {
  return (
    <WorkWrapper>
      <SectionTitle>Contact</SectionTitle>
      <div className="max-w-[1260px] gap-2 px-8">
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-4 auto-rows-[1fr] ">
          {mySocials.map((item, index) => (
            <Card isFooterBlurred className={item.className} key={index}>
              <CardHeader className="absolute bg-white/30 z-10 top-0 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">
                  {item.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={item.image}
              />
              <CardFooter className="absolute bg-white/0  bottom-0 z-10 justify-between">
                <Button
                  className="bg-black/30 hover:bg-blue-700 text-white font-bold"
                  radius="full"
                  size="sm"
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
