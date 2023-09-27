import StyledComponentsRegistry from "../lib/registry";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Roboto_Mono } from "next/font/google";
import { Providers } from "./providers";

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair_display.variable} ${roboto_mono.variable}`}
    >
      <body>
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
