import { Open_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Factory",
    template: "Factory | %s",
  },
  description:
    "It's a factory page that introduces inventory management and products.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
