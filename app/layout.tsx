import type { Metadata } from "next";
import {Urbanist} from "next/font/google"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "@/redux/StoreProvider";
import { Toaster } from "sonner";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const urbaniste = Urbanist({subsets: ['latin']})

export const metadata: Metadata = {
  title: "SmartShop",
  description: "The Best Place Where You Can Find What You Need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={urbaniste.className}
        >
          <StoreProvider>
            <Header/>
            {children}
            <Toaster/>
            <Footer/>
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
