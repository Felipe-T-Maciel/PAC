'use client'

import "@/src/style/global.css";
import { UserProvider } from "@/src/contexts/UserContext";
import { ButtonProvider } from "@/src/contexts/ThemeContext";
import { HeaderComponent } from "@/src/components/HeaderComponent";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) return;
    router.push("/");
  })

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="flex transition-colors duration-500 h-screen w-screen overflow-hidden">
        <UserProvider>
          <ButtonProvider>
            <HeaderComponent />
            {children}
          </ButtonProvider>
        </ UserProvider>
      </body>

    </html>
  )
}