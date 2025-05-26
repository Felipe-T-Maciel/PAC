'use client';

import { useEffect, useState, Suspense } from "react";

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const fallback = (
        <div className="w-screen h-screen flex items-center justify-center">
            Carregando...
        </div>
    );

    return (
        <div className="w-screen h-screen flex bg-cover bg-top items-center justify-center alata-regular">
            <Suspense fallback={fallback}>
                {mounted ? children : fallback}
            </Suspense>
        </div>
    );
}
