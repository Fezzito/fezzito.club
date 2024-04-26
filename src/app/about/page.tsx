"use client";
import React from "react";
import { Bebas_Neue } from "next/font/google";
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
} from "@/components/styles";
import {
  aboutEducation,
  aboutWork,
  skillsArray,
  shortDesc,
} from "@/lib/constants";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function Page() {
  return (
    <WorkWrapper>
      <GoBack href={"/"}>{"<<<back"}</GoBack>
      <SectionTitle className={bebas_neue.className}>About</SectionTitle>
      <TextWrapper>
        <AboutText>{shortDesc}</AboutText>
        <AboutSubtitle className={bebas_neue.className}>
          Education
        </AboutSubtitle>
        {aboutEducation.map((item, index) => (
          <ItemContainer key={index}>
            <HStack>
              <AboutText>{item.title}</AboutText>
              <AboutText>{item.position}</AboutText>
            </HStack>
            <HStack>
              <Dates>{item.date}</Dates>
            </HStack>
          </ItemContainer>
        ))}
        <AboutSubtitle className={bebas_neue.className}>
          Work experience
        </AboutSubtitle>
        {aboutWork.map((item, index) => (
          <ItemContainer key={index}>
            <HStack>
              <AboutText>{item.title}</AboutText>
              <AboutText>{item.position}</AboutText>
              <AboutText>{item.description}</AboutText>
            </HStack>
            <HStack>
              <Dates>{item.date}</Dates>
              <Chip>
                <AboutText>{item.chip}</AboutText>
              </Chip>
            </HStack>
          </ItemContainer>
        ))}
        <AboutSubtitle className={bebas_neue.className}>Skills</AboutSubtitle>
        <ChipContainer>
          {skillsArray.map((item, index) => (
            <Chip key={index}>
              <AboutText>{item}</AboutText>
            </Chip>
          ))}
        </ChipContainer>
      </TextWrapper>
    </WorkWrapper>
  );
}
