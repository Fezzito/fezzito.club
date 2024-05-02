//file to make StyledComponents usable within Next
"use client";

import styled, { css, keyframes } from "styled-components";
import Link from "next/link";

interface TitleProps {
  animate?: boolean; //si lo declaro inline llora Typescript
  index: number;
}

const changeFontSize = keyframes`
0% { font-size: 48px; }
20% { font-size: 64px; }
40% { font-size: 80px; }
60% { font-size: 96px; }
80% { font-size: 112px; }
100% { font-size: 128px; }
`;
export const Hidden = styled.h1`
  background-color: transparent;
  color: transparent;
  font-size: 1px;
`;
//si no se usa con css los keyframes no funcionan, cambios de v3 a v4 de styled components
export const LandingTitle = styled.h2<TitleProps>`
  color: #d9d9d9;
  background-color: #040405;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding: 0px 10px;

  width: fit-content;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${css`
          ${changeFontSize}`} 7s ease-in-out;
    `}

  @media (max-width: 650px) {
    font-size: 5em !important;
  }

  @media (max-width: 450px) {
    font-size: 4em !important;
  }
`;

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #bfbfbf;
  justify-content: space-between;

  @media (max-width: 650px) {
    background-color: #040405;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
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

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
  padding: 20px 20px;

  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;

export const NavItem = styled(Link)`
  color: #040405;
  font-size: 35px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration: none !important;
  border-radius: 50px;
  padding: 10px 35px;
  cursor: pointer;
  font-family: monospace;

  &:hover {
    font-weight: 500;
    transition: all 0.5s ease-in;
  }

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
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
  background-color: #d9d9d9;

  &.contact {
    height: 100vh;

    @media (max-width: 768px) {
      height: 100%;
    }
  }

  &.about {
    width: 100vw;

    @media (max-width: 768px) {
      width: fit-content;
    }
  }

  &.work {
    height: 100vh;
  }
`;

export const SectionTitle = styled.h1`
  color: #040405;
  font-size: 60px;
  line-height: normal;
  margin: 20px 0px;
  width: fit-content;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  padding: 0px 20px;
  background-color: #d9d9d9;

  @media (max-width: 768px) {
    width: 75%;
  }
`;

export const AboutSubtitle = styled.h2`
  color: #040405;
  font-weight: 700;
  font-size: 1, 25rem;
  margin: 0;
`;

export const AboutText = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #040405;
  margin: 0;
  font-family: monospace;
`;

export const Dates = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #040404;
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
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #a3aabf;
`;

export const GoBack = styled(Link)`
  position: absolute;
  top: 5;
  right: 5;
`;
