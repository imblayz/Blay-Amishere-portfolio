import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";

export const metadata: Metadata = {
  title: "Blay Amishere Kwaw | Web Developer & Cybersecurity Enthusiast",
  description:
    "Computer Science student at Kaaf University. Web Developer, Cybersecurity Intern, and Digital Marketing Specialist based in Accra, Ghana.",
  keywords: [
    "Blay Amishere",
    "Web Developer",
    "Cybersecurity",
    "Next.js",
    "Ghana",
    "Portfolio",
    "Digital Marketing",
  ],
  authors: [{ name: "Blay Amishere Kwaw" }],
  openGraph: {
    title: "Blay Amishere Kwaw | Portfolio",
    description:
      "Web Developer, Cybersecurity Intern & Digital Marketing Specialist based in Accra, Ghana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg-primary text-text-primary antialiased grain-overlay">
        <LoadingScreen />
        <ScrollProgress />
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}