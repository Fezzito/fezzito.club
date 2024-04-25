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
  color: #a3aabf;
  background-color: #040405;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
  margin: 0;

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
  background-color: #a3aabf;

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
  position: absolute;
  bottom: 20px;
  right: 40%;
  gap: 25px;
  padding: 20px 20px;

  @media (max-width: 768px) {
    width: 90%;
    right: 2%;
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

  &:hover {
    font-weight: 500;
    transition: all 0.5s ease-in;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 20px;
  }

  @media (max-width: 650px) {
    font-size: 30px;
    color: #f8d909;
    padding: 20px;
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
  background-color: #a3aabf;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #e7e7e7;
    border: 1px solid #cacaca;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &:-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #363636;
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
  width: 50%;
  padding: 0px 20px;
  background-color: #a3aabf;
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
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Chip = styled.div`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: blue;
`;
