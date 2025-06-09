'use client'

import 'primeicons/primeicons.css';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useButtonContext } from '@/src/contexts/ThemeContext';

export const HeaderComponent = () => {
    const router = useRouter();
    const [theme, setTheme] = useState<string>('light');
    const { setButtonState } = useButtonContext();
    
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
            setTheme('dark');
            setButtonState("dark");

        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
            setButtonState("light");

        }
    }, []);

    const handleTheme = () => {
        const htmlElement = document.documentElement;

        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            setTheme('light');
            setButtonState("light");
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            setTheme('dark');
            setButtonState("dark");
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <>
            <div className="fixed z-50 flex items-center w-full h-16 justify-between mont-montserrat bg-[#003550]">
                <div onClick={() => router.push("/")} className="w-[5%] px-4 cursor-pointer">
                    <Image src={"/catolica.png"} width={40} height={40} alt="logo catolica"></Image>
                </div>
                <div className='flex w-full gap-5 text-white'>
                    <div className='cursor-pointer' onClick={() => router.push("/")}>
                        <span>Página inicial</span>
                    </div>
                    <div className='cursor-pointer' onClick={() => router.push("/about")}>
                        <span>Sobre nós</span>
                    </div>
                </div>
                <div className="gap-3 flex items-center w-[60%] justify-end px-4 h-8  text-white ">
                    <div className="flex items-center justify-center text-center w-fit pt-0.5">
                        <span style={{ fontSize: "1rem" }} onClick={() => handleTheme()} className={`cursor-pointer   ${theme == 'dark' ? "pi pi-moon" : "pi pi-sun"}`}></span>
                    </div>
                </div>
            </div>
        </>
    );
};