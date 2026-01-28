// app/layout.tsx
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Platform Dashboard with Chatbot",
  description: "Platform pembelajaran untuk guru dan siswa",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="relative min-h-screen bg-[url('/bg-baru.png')] bg-cover bg-center bg-no-repeat bg-fixed">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-xs z-0" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
