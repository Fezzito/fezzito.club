"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { NavItem, WorkWrapper } from "@/components/styles";
import { mySocials } from "@/lib/constants";
import "tailwindcss/tailwind.css";

export default function Page() {
  return (
    <WorkWrapper>
      <NavItem>Contact</NavItem>
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
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-medium">
                    {item.shortDescription}
                  </p>
                </div>
                <Button
                  className="text-tiny"
                  color="primary"
                  radius="full"
                  size="sm"
                >
                  <a href={`${item.url}`} target="blank">
                    Visit
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
