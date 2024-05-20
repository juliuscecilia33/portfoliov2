import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({
  preload: false,
});

export const metadata: Metadata = {
  title: "JULIUS CECILIA",
  description: "Julius Cecilia Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
