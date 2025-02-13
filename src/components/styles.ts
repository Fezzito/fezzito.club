//file to make StyledComponents usable within Next
"use client";

import styled from "styled-components";
import Link from "next/link";

interface TitleProps {
  animate?: boolean; //si lo declaro inline llora Typescript
  index: number;
}
interface AboutTextProps {
  fontSize?: string;
}
interface ImageProps {
  src?: string;
}

export const Hidden = styled.h1`
  background-color: transparent;
  color: transparent;
  font-size: 1px;
`;

export const LandingTitle = styled.h2<TitleProps>`
  color: #ffa64a;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding: 0px 10px;
  width: fit-content;
`;

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #222222;
  justify-content: space-between;

  @media (max-width: 650px) {
  }
`;

export const LandingSubtitle = styled.h3`
  color: #040405;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 22px;
    width: 145px;
  }
`;

export const NavItem = styled(Link)`
  color: #ffa64a;
  font-size: 35px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration: none !important;
  border-radius: 50px;
  padding: 10px 0px;
  cursor: pointer;
  font-family: monospace;

  @media (max-width: 650px) {
    color: #d9d9d9;
    font-size: 20px;
    padding: 8px 20px;
  }

  @media (max-width: 320px) {
    font-size: 20px;
    color: #d9d9d9;
    padding: 10px;
  }
`;

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 5px 20px 20px 20px;
  box-sizing: border-box;
  background-color: #222222;

  &.contact {
    height: 100vh;
  }

  &.about {


    @media (max-width: 768px) {
      width: fit-content;
    }
  }


  }
`;

export const SectionTitle = styled.h1`
  color: #f9e4bc;
  font-size: 60px;
  line-height: normal;
  margin: 20px 0px;
  width: fit-content;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  width: 90%;
  padding: 0px 20px;
  background-color: #222222;

  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const AboutSubtitle = styled.h2`
  color: #f9e4bc;
  font-weight: 700;
  font-size: 1, 25rem;
  margin: 30px 0px;
`;

export const AboutText = styled.p<AboutTextProps>`
  font-size: ${(props) => props.fontSize || "0,875rem"};
  line-height: 1.25rem;
  font-weight: 600;
  color: #f9e4bc;
  margin: 5px 0px 10px 0px;
  font-family: monospace;

  &.chip {
    margin: 0px;
  }
`;

export const Dates = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #f9e4bc;
  margin: 0;
  font-family: monospace;
  white-space: nowrap;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 20px 0px;
  border: solid 1px #a3aabf;
  border-radius: 10px;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 20px 0px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;

export const Chip = styled.div`
  width: fit-content;
  padding: 3px 7px;
  border-radius: 5px;
  background-color: #a3aabf;
`;

export const GoBack = styled(Link)`
  position: absolute;
  top: 10px;
  right: 50%;
  font-size: 20px;
  color: #ffa64a;
  text-decoration: none !important;
`;

export const Card = styled.div`
  width: fit-content;
  background-color: #bfbdba;
  border: solid 1px #a3aabf;
  border-radius: 10px;
  padding: 10px;

  &.fromContact {
    width: 220px;
    height: 220px;
    text-align-last: center;
    text-align: -webkit-center;
  }
`;

export const ImageComponent = styled.div<ImageProps>`
  width: 300px;
  height: 300px;
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Spacer = styled.div`
  width: 100%;
  border-bottom: 2px solid #ffa64a;
  margin: 10px 0;
`;
