'use client'

import "@/src/style/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  )
}