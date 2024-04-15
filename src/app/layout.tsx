import StyledComponentsRegistry from "../lib/registry";
import { Analytics } from "@vercel/analytics/react";
import { Roboto_Mono } from "next/font/google";
import { Providers } from "./providers";
import { ViewTransitions } from "next-view-transitions";

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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${roboto_mono.className}`}
          style={{ margin: "0 !important" }}
        >
          <Providers>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </Providers>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
