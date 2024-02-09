//file to make StyledComponents usable within Next
"use client";

import styled, { css, keyframes } from "styled-components";
import Link from "next/link";

interface TitleProps {
  animate?: boolean; //si lo declaro inline llora Typescript
  index: number;
}

const mobileFontSizes = [8, 24, 40, 56, 72]; // Valores de tamaño de fuente para dispositivos móviles

const changeFontSize = keyframes`
0% { font-size: 48px; }
20% { font-size: 64px; }
40% { font-size: 80px; }
60% { font-size: 96px; }
80% { font-size: 112px; }
100% { font-size: 128px; }
`;

const changeFontSizeMobile = keyframes`
0%, 100% { font-size: ${mobileFontSizes[0]}px; }
20% { font-size: ${mobileFontSizes[1]}px; }
40% { font-size: ${mobileFontSizes[2]}px; }
60% { font-size: ${mobileFontSizes[3]}px; }
80% { font-size: ${mobileFontSizes[4]}px; }
`;

//si no se usa con css los keyframes no funcionan, cambios de v3 a v4 de styled components
export const LandingTitle = styled.h1<TitleProps>`
  color: #f8d909;
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

  @media (max-width: 768px) {
    ${({ animate }) =>
      animate &&
      animate.toString() === "true" &&
      css`
        animation: ${changeFontSizeMobile} 7s ease-in-out;
        font-size: ${changeFontSizeMobile};
      `}
  }
`;

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f8d909;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LandingSubtitle = styled.h2`
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
  right: 30%;
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
`;

export const SectionTitle = styled.h1`
  color: #040405;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 30px 0;

  &:hover {
    transition: all 0.5s ease-in;
    font-weight: 600;
    font-size: 55px;
  }
`;
export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #090909;
  overflow-y: scroll;
`;
