import React from "react";
import Link from "next/link";
import Image from "next/image";
import lisergicBg from "../../public/lisergicBg.svg";
import {
  LandingWrapper,
  Navbar,
  SectionButton,
  SectionText,
  SvgLanding,
} from "@/components/styles";

export default function Page() {
  return (
    <LandingWrapper>
      <Navbar>
        <SectionButton>
          <Link href={"/work"}>
            <SectionText>Works</SectionText>
          </Link>
        </SectionButton>
        <SectionButton>
          <Link href={"/about"}>
            <SectionText> About</SectionText>
          </Link>
        </SectionButton>
      </Navbar>
      <SvgLanding>
        <Image width={850} src={lisergicBg} alt="Lisergic Background" />
      </SvgLanding>
    </LandingWrapper>
  );
}
