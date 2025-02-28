import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type React from "react";
import ClientToaster from "@/components/ClientToaster"; 
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Regal Engineering & Design Solutions",
  description: "Precision. Innovation. Shaping Visions into Reality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${montserrat.variable} ${roboto.variable} font-sans`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          <Header />
          {children}
          <ClientToaster /> {/* Render the client component here */}
          <Footer />
        {/* </ThemeProvider> */}
        <Analytics />
      </body>
    </html>
  );
}
