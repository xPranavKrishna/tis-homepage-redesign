import type { Metadata } from "next";
import "./globals.css";
import ClientFeatures from "../components/ClientFeatures";

export const metadata: Metadata = {
  title: "Tula's International School | TIS",
  description: "A modern homepage redesign for Tula's International School, Dehradun.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientFeatures />
        {children}
      </body>
    </html>
  );
}
