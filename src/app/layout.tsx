import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SetLuna – Learn Web Development the Fun Way",
  description:
    "Learn web development the fun way with SetLuna's gamified platform. Interactive HTML, CSS, JavaScript, React & Next.js courses with XP and badges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}