import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sibghatullah | AI Engineer & Developer",
  description: "Portfolio of Sibghatullah - Innovative AI Engineer specializing in Machine Learning, Deep Learning, and LLM-based intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradients"></div>
        {children}
      </body>
    </html>
  );
}
