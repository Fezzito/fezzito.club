import React from "react";
import {
  LandingWrapper,
  Hero,
  Navbar,
  NavItem,
  LandingTitle,
  LandingSubtitle,
} from "@/components/styles";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Fezzito.club</title>
        <meta
          name="description"
          content="UX Research, product development & frontend."
        />
        <meta property="og:title" content="Fezzito.club" />
        <meta
          property="og:description"
          content="Explora mi portfolio y mis proyectos."
        />
        <meta property="og:image" content="../../public/opengraphimg.png" />
        <meta
          name="keywords"
          content="UX, Development, Design, UX Research, Product, Research, Portfolio"
        />
        <meta
          http-equiv="content-type"
          content="text/html; charset=UTF-8"
        ></meta>
        <meta name="language" content="English"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:url" content="https://www.fezzito.club/" />
        <meta name="geo.placename" content="Buenos Aires, Argentina" />
        <meta name="geo.position" content="-34.61315;-58.37723" />
        <meta name="copyright" content="© 2023 - Fezzito" />
      </Head>
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
