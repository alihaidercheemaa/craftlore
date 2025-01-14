import "~/styles/globals.css";

import { Montserrat, Open_Sans, Manrope } from "next/font/google";
import { Providers } from "~/app/provider";
import { type Metadata } from "next";
import { Header } from "~/components/general/headers/header";
import { Footer } from "~/components/general/footers/footer";
import { Toaster } from "~/components/ui/toaster";
import { ScrollToTop } from "~/components/animations/scroll-top";

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
  title: "CRAFTLORE",
  description: "Tecch - Technology & IT Solutions Next js Template",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${opensans.variable} ${manrope.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Header  disabled/>
          <main className="flex-grow">{children}</main>
          <ScrollToTop />
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
