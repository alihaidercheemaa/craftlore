import "~/styles/globals.css";

import { Montserrat, Open_Sans,Manrope } from "next/font/google";
import { Providers } from "~/app/provider";
import { type Metadata } from "next";
import { Header } from "~/components/general/headers/header";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-montserrat",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-opensans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: 'CRAFTLORE',
  description: 'Tecch - Technology & IT Solutions Next js Template',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${opensans.variable} ${manrope.variable}`}>
      <body className="grid grid-cols-12">
        <Header/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
