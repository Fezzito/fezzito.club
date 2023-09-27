import React from "react";
import Link from "next/link";
import Image from "next/image";
import lisergicBg from "../../public/lisergicBg.svg";
import {
  LandingWrapper,
  SvgLanding,
  Hero,
  Navbar,
  NavItem,
  TextContainer,
  LandingTitle,
  LandingSubtitle,
} from "@/components/styles";

export default function Page() {
  return (
    <>
      <LandingWrapper>
        <Hero>
          <TextContainer>
            <LandingTitle>Fezzito.club</LandingTitle>
            <LandingSubtitle>product & frontend </LandingSubtitle>
          </TextContainer>
          <SvgLanding>
            <Image width={850} src={lisergicBg} alt="Lisergic Background" />
          </SvgLanding>
        </Hero>
        <Navbar>
          <Link href={"/work"}>
            <NavItem>work</NavItem>
          </Link>
          <Link href={"/about"}>
            <NavItem> about</NavItem>
          </Link>
          <Link href={"/contact"}>
            <NavItem> contact</NavItem>
          </Link>
        </Navbar>
      </LandingWrapper>
    </>
  );
}
