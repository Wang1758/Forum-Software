'use client'
// app/layout.tsx
import Navbar from "@/components/navbar";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <main className="szu flex-1 min-h-[calc(110vh)] text-foreground bg-background">
            <Navbar />
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
