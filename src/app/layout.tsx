import "~/styles/globals.css";

import { Montserrat, Open_Sans } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-opensans",
});


export const metadata: Metadata = {
  title: 'Tecch - Technology & IT Solutions Next js Template',
  description: 'Tecch - Technology & IT Solutions Next js Template',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${opensans.variable} h-[5000px]`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
