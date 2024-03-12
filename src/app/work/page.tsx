// `app/work/page.tsx` is the UI for the `/work` URL
"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { SectionTitle, WorkWrapper } from "@/components/styles";
import { myWorks } from "@/lib/constants";
import "tailwindcss/tailwind.css";

export default function Page() {
  return (
    <WorkWrapper>
      <SectionTitle>Work</SectionTitle>
      {/* <div className="max-w-[1260px] gap-2 px-8"> */}
      <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-4 auto-rows-[1fr] ">
        {myWorks.map((item, index) => (
          <Card className={item.className} key={index}>
            <CardHeader className="absolute bg-white/30 z-10 top-0 flex-col items-start">
              <h4 className="text-black font-medium text-2xl">{item.title}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={item.imagen}
            />
            <CardFooter className="absolute bg-transparent bottom-0 border-transparent z-10 ">
              <Button
                className="bg-black/30 hover:bg-yellow-500 text-white font-bold"
                radius="full"
                size="sm"
              >
                <a href={`${item.url}`} target="blank">
                  GO!
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* </div> */}
    </WorkWrapper>
  );
}
