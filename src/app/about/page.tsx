"use client";
import React from "react";

import {
  SectionTitle,
  WorkWrapper,
  AboutSubtitle,
  AboutText,
  TextWrapper,
  ItemContainer,
  HStack,
  Chip,
  ChipContainer,
  Dates,
  GoBack,
  VStack,
  Spacer,
} from "@/components/styles";
import {
  aboutEducation,
  aboutWork,
  skillsArray,
  shortDesc,
} from "@/lib/constants";
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });
export default function Page() {
  return (
    <>
      <WorkWrapper className="about">
        <GoBack href={"/"}>{"<<<back"}</GoBack>
        <SectionTitle className={shareTechMono.className}>About</SectionTitle>
        <TextWrapper>
          <AboutText>{shortDesc}</AboutText>
          <AboutSubtitle className={shareTechMono.className}>
            Education
          </AboutSubtitle>
          {aboutEducation.map((item, index) => (
            <>
              <HStack key={index}>
                <VStack>
                  <AboutText>{item.title}</AboutText>
                  <AboutText>{item.position}</AboutText>
                </VStack>
                <VStack>
                  <Dates>{item.date}</Dates>
                </VStack>
              </HStack>
              <Spacer />
            </>
          ))}
          <AboutSubtitle className={shareTechMono.className}>
            Work experience
          </AboutSubtitle>
          {aboutWork.map((item, index) => (
            <>
              <HStack key={index}>
                <VStack>
                  <AboutText>{item.title}</AboutText>
                  <AboutText>{item.position}</AboutText>
                  <AboutText>{item.description}</AboutText>
                </VStack>
                <VStack>
                  <Dates>{item.date}</Dates>

                  <AboutText>{item.chip}</AboutText>
                </VStack>
              </HStack>
              <Spacer />
            </>
          ))}
          <AboutSubtitle className={shareTechMono.className}>
            Skills
          </AboutSubtitle>
          <ChipContainer>
            {skillsArray.map((item, index) => (
              <AboutText key={index}>{item}</AboutText>
            ))}
          </ChipContainer>
        </TextWrapper>
      </WorkWrapper>
    </>
  );
}
