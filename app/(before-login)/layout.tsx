"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css";
import { use, useEffect, useState } from "react";


export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [bg, setBg] = useState("");
  useEffect(() => {
    setBg("url('/Screen - Login.png')");
  }, [])

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ativa renderização client-side
  }, []);

  if (!mounted) {
    // Renderiza algo estático no SSR para evitar mismatch
    return (
      <html lang="en">
      <head />
      <body
        className={`w-screen h-screen flex items-center justify-center`}
      > 
        {children}
      </body>
    </html>
    );    
  }

  

  return (  
    <html lang="en">
      <head />
      <body
        className={`w-screen h-screen flex bg-cover bg-top items-center justify-center alata-regular`}
        style={{ backgroundImage: bg }}
      > 
        {children}
      </body>
    </html>
  );
}
