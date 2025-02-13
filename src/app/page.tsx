"use client";

import React from "react";
import {
  LandingWrapper,
  NavItem,
  LandingTitle,
  ImageComponent,
  VStack,
  HStack,
  Spacer,
} from "@/components/styles";
import Head from "next/head";
import logo from "../../public/logo.svg";
import { Share_Tech_Mono } from "next/font/google";

//cuando se usa en una pagina especifica se tiene que declarar afuera de la funcion para evitar problemas de scope
const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export default function Page() {
  const landingArray = ["Carancho", "Diseño", "Argentino"];

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
        <HStack>
          <VStack>
            {landingArray.map((item, index) => (
              <LandingTitle
                key={index}
                index={index}
                style={{ fontSize: `50px` }}
                className={shareTechMono.className}
              >
                {item}
              </LandingTitle>
            ))}
          </VStack>
          <ImageComponent src={logo.src} />
        </HStack>

        <VStack>
          <NavItem href={"/work"}>trabajos</NavItem>
          <NavItem href={"/contact"}>contacto</NavItem>
          <NavItem href={"/about"}>sobre mi</NavItem>
        </VStack>
      </LandingWrapper>
    </>
  );
}
