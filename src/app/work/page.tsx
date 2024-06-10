// `app/work/page.tsx` is the UI for the `/work` URL
"use client";
import React from "react";
// import {
//   CardHeader,
//   CardFooter,
//   Image,
//   Divider,
//   CardBody,
// } from "@nextui-org/react";
import {
  SectionTitle,
  WorkWrapper,
  AboutText,
  GoBack,
  Card,
} from "@/components/styles";
import { myWorks } from "@/lib/constants";
import { Bebas_Neue } from "next/font/google";
import "tailwindcss/tailwind.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <>
      <WorkWrapper className="work">
        <GoBack href={"/"}>{"<<<back"}</GoBack>
        <SectionTitle className={bebas_neue.className}>Work</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[1fr] ">
          {myWorks.map((item, index) => (
            <>
              <Card
                key={index}
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
              >
                <div className="flex flex-col">
                  <AboutText fontSize="18px">{item.title}</AboutText>
                </div>
                <AboutText fontSize="15px">{item.subtitle}</AboutText>
                <AboutText fontSize="13px">{item.description}</AboutText>
              </Card>
            </>
          ))}
        </div>
      </WorkWrapper>
    </>
  );
}
