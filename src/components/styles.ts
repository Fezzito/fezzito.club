//file to make StyledComponents usable within Next
"use client";

import styled from "styled-components";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: #090909;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  border-top: 1px solid #afb2bb;
`;

export const SectionButton = styled.div`
  variant: outlined;

  width: 50%;
  font-style: Roboto;
`;

export const SectionText = styled.h1`
  variant: outlined;
  height: 200px;
  width: 50%;
  font-style: Roboto;
  color: #afb2bb;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ff0095;
  }
`;

export const SvgLanding = styled.div`
  height: 300px;
  width: 100vw;
  align-self: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: rotate(90deg);
  position: absolute;
  left: 40%;
  bottom: -3%;
`;
