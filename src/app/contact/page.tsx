"use client";
import React from "react";

import {
  AboutText,
  SectionTitle,
  WorkWrapper,
  GoBack,
  Spacer,
  TextWrapper,
} from "@/components/styles";
import { mySocials } from "@/lib/constants";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <>
      <WorkWrapper className="contact">
        <SectionTitle className={jetbrainsMono.className}>Contact</SectionTitle>
        <GoBack href={"/"}>{"<<<back"}</GoBack>
        <TextWrapper>
          {mySocials.map((item, index) => (
            <>
              <a
                key={index}
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
              >
                <AboutText className="contact">{item.title}</AboutText>
              </a>
              <Spacer />
            </>
          ))}
        </TextWrapper>
      </WorkWrapper>
    </>
  );
}
