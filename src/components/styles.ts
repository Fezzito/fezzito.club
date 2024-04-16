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
  background-color: #f8d909;

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
  height: 100vh;
  box-sizing: border-box;
  background-color: #040405;
  overflow-y: scroll;
`;

export const SectionTitle = styled.h1`
  color: #f8d909;
  font-size: 60px;
  line-height: normal;
  margin: 20px 0px;
  width: fit-content;
`;
