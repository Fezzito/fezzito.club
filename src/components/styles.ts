//file to make StyledComponents usable within Next
"use client";

import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #090909;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const LandingTitle = styled.h1`
  color: #afb2bb;
  font-family: Rubik;
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LandingSubtitle = styled.h2`
  color: #fff;
  font-family: Roboto Mono;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SvgLanding = styled.div`
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: rotate(90deg);
  position: absolute;
  bottom: 150px;
  right: 0px;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-top: 1px solid #afb2bb;
`;

export const NavItem = styled.p`
  color: #afb2bb;
  font-family: Rubik;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 15px 0 0 0;
  text-decoration: none !important;

  &:hover {
    color: #4fbfc9;
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
