'use client'

import "@/src/style/global.css";
import { ButtonProvider } from "@/src/contexts/ThemeContext";
import { HeaderComponent } from "@/src/components/HeaderComponent";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="flex transition-colors duration-500 h-screen w-screen overflow-hidden">
          <ButtonProvider>
            <HeaderComponent />
            {children}
          </ButtonProvider>
      </body>

    </html>
  )
}