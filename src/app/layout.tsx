import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/src/app/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorting Algorithm Visualizer",
  description: "Algorithm Visualizer - Micro and Macro visualizations to illustrate the sorting process for small and large data sets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
