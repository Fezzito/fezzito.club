import React from "react";
import Link from "next/link";
import {
  LandingWrapper,
  Hero,
  Navbar,
  NavItem,
  LandingTitle,
  LandingSubtitle,
} from "@/components/styles";

export default function Page() {
  return (
    <>
      <LandingWrapper>
        <Hero>
          <LandingTitle>Fezzito.club</LandingTitle>
          <LandingSubtitle>research, product & frontend </LandingSubtitle>
        </Hero>
        <Navbar>
          <NavItem href={"/work"}>work</NavItem>
          <NavItem href={"/about"}> about</NavItem>
          <NavItem href={"/contact"}> contact</NavItem>
        </Navbar>
      </LandingWrapper>
    </>
  );
}
