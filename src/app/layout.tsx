'use client'
import "@/src/style/global.css";
import { UserProvider } from "@/src/contexts/UserContext";
import { HeaderComponent } from "@/src/components/HeaderComponent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="flex transition-colors duration-500 h-screen w-screen overflow-hidden">
        <UserProvider>
          <HeaderComponent />
          {children}
        </ UserProvider>
      </body>

    </html>
  )
}