"use client";

import { useEffect, useState } from "react";

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); 
    }, []);

    if (!mounted) {
        return (
            <div
                className={`w-screen h-screen flex items-center justify-center `}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            className={`w-screen h-screen flex bg-cover bg-top items-center justify-center alata-regular `}
        >
            {children}
        </div>
    );
}
