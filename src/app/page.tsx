"use client";

import React, { useState, useEffect } from "react";
import {
  LandingWrapper,
  Hero,
  Navbar,
  NavItem,
  LandingTitle,
  Hidden,
} from "@/components/styles";
import Head from "next/head";

export default function Page() {
  //handleo de la animacion
  const [animate, setAnimate] = useState(true);
  const landingArray = [
    "design",
    "product",
    "research",
    "&frontend",
    "fezzito.club",
  ];

  useEffect(() => {
    setAnimate(false);
  }, []);

  return (
    <>
      <Head>
        <title>Fezzito.club</title>
        <meta property="og:title" content="Fezzito.club" />
        <meta property="og:url" content="https://www.fezzito.club/" />
        <meta
          property="og:description"
          content="Welcome to my hub. Product, research and frontend, all in one. Enjoy!."
        />
        <meta
          property="og:image"
          content="https://www.fezzito.club/opengraphimg.svg"
        />
        <meta
          property="og:image:url"
          content="https://www.fezzito.club/opengraphimg.svg"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="author" content="Fezzito" />
        <meta
          property="keywords"
          content="UX, Development, Design, UX Research, Product, Research, Portfolio"
        />
        <meta
          property="og:site_name"
          content="Ux research, product desing and frontend at your service"
        />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:locale" content="en_US" />
        <meta content="text/html; charset=UTF-8" property="Content-Type" />
        <meta property="language" content="English" />
        <meta property="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="geo.placename" content="Buenos Aires, Argentina" />
        <meta property="geo.position" content="-34.61315;-58.37723" />
        <meta property="copyright" content="© 2023 - Fezzito" />
        {/* twitter card markup */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@fezzit0" />
        <meta property="twitter:creator" content="@fezzit0" />
      </Head>
      <LandingWrapper>
        <Hero>
          <Hidden>Fezzito.club</Hidden>
          {landingArray.map((item, index) => (
            <LandingTitle
              key={index}
              animate={animate}
              index={index}
              style={{ fontSize: `${48 + index * 16}px` }}
            >
              {item}
            </LandingTitle>
          ))}
        </Hero>
        <Navbar>
          <NavItem href={"/work"}>work</NavItem>
          <NavItem href={"/contact"}> contact</NavItem>
        </Navbar>
      </LandingWrapper>
    </>
  );
}
