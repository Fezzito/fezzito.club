// `app/work/page.tsx` is the UI for the `/work` URL
"use client";
import React from "react";

import {
  SectionTitle,
  WorkWrapper,
  AboutText,
  GoBack,
  VStack,
  Spacer,
  TextWrapper,
} from "@/components/styles";
import { myWorks } from "@/lib/constants";
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <WorkWrapper className="work">
      <GoBack href={"/"}>{"<<<back"}</GoBack>
      <SectionTitle className={shareTechMono.className}>Work</SectionTitle>
      <TextWrapper>
        {myWorks.map((item, index) => (
          <>
            <a
              key={index}
              onClick={() => {
                window.open(item.url, "_blank");
              }}
            >
              <VStack>
                <AboutText fontSize="19px">{item.title}</AboutText>
                <AboutText fontSize="17px">{item.subtitle}</AboutText>
                <AboutText fontSize="14px">{item.description}</AboutText>
              </VStack>
            </a>
            <Spacer />
          </>
        ))}
      </TextWrapper>
    </WorkWrapper>
  );
}
