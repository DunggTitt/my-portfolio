import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tien Dung - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#02050f] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}