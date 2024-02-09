"use client";

import React, { useState, useEffect } from "react";
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
  //handleo de la animacion
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
  }, []);

  return (
    <>
      <Head>
        <title>Fezzito.club</title>
        <meta name="title" property="og:title" content="Fezzito.club" />
        <meta
          name="description"
          content="Welcome to my hub. Product, research and frontend, all in one. Enjoy!."
        />
        <meta
          name="description"
          property="og:description"
          content="Explore my portfolio and wide array of work."
        />
        <meta
          name="image"
          property="og:image"
          content="https://www.fezzito.club/opengraphimg.png"
        />
        <meta name="author" content="Fezzito"></meta>
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
          {[...Array(5)].map((_, index) => (
            <LandingTitle key={index} animate={animate} index={index}>
              fessito.club
            </LandingTitle>
          ))}
        </Hero>
        <Navbar>
          <LandingSubtitle>research, product & frontend </LandingSubtitle>
          <NavItem href={"/work"}>work</NavItem>
          <NavItem href={"/contact"}> contact</NavItem>
        </Navbar>
      </LandingWrapper>
    </>
  );
}
