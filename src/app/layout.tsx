'use client'
import "@/src/style/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      {children}
    </html>
  )
}