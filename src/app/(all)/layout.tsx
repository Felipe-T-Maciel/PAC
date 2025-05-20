'use client'

import "@/src/style/global.css";
import { HeaderComponent } from "@/src/components/HeaderComponent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="flex transition-colors duration-500 h-screen w-screen">
      <HeaderComponent />
      {children}
    </body>
  )
}