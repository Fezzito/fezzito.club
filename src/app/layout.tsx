import StyledComponentsRegistry from "../lib/registry";
import { Analytics } from "@vercel/analytics/react";
import { Rubik, Roboto_Mono } from "next/font/google";
import { Providers } from "./providers";

//por cuestiones de que no me reconoce el nombre rubik como
//variable para el tailwind.config le dejo playfair_display
//pero en realidad es rubik el typo
export const playfair_display = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono-medium",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair_display.className} ${roboto_mono.className}`}
        style={{ margin: "0 !important" }}
      >
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
