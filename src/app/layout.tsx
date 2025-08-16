import type { Metadata } from "next";
import { arimaFont, interFont } from "./fonts/fontsConfig";
import "./globals.css";
import StateProvider from "./state_management/provider";
import PageContainer from "./Containers/PageContainer";


export const metadata: Metadata = {
  title: "Discovery Care Group",
  description: "Human-Centered NDIS Support Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
        <link rel="canonical" href="https://www.discoverycareservices.com.au/" />
      </head>

      <body
        className={`${arimaFont.className} antialiased  bg-white text-gray-700`}
      >
        <StateProvider>
            <PageContainer>
              {children}
            </PageContainer>
        </StateProvider>
      </body>
    </html>
  );
}
