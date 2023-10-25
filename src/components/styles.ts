//file to make StyledComponents usable within Next
"use client";

import styled from "styled-components";
import Link from "next/link";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #090909;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 150px 40px 0 40px;
`;

export const LandingTitle = styled.h1`
  color: #afb2bb;
  font-size: 96px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
  width: 465px;
  word-break: break-all;
  transform: rotate(45deg);
`;

export const LandingSubtitle = styled.h2`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 175px;
  word-break: break-all;
  margin: 50px 0px 0px 84px;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  bottom: 20px;
  right: 32%;
  gap: 25px;
  border: 1px solid #afb2bb;
  border-radius: 50px;
  padding: 20px 20px;
`;

export const NavItem = styled(Link)`
  color: #afb2bb;
  font-size: 35px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration: none !important;
  border: 1px solid #afb2bb;
  border-radius: 50px;
  padding: 10px 35px;

  &:hover {
    color: #ff4df0;
    border: 2px solid #70ffdf;
    font-weight: 500;
  }
`;

export const SectionTitle = styled.h1`
  color: #afb2bb;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 15px 0 0 0;
  text-decoration: none !important;

  &:hover {
    color: #ff4df0;
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
