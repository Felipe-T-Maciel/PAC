'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import 'primeicons/primeicons.css';
import { useEffect, useState } from "react";

export const HeaderComponent = () => {

    const router = useRouter();
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    const handleTheme = () => {
        const htmlElement = document.documentElement;
        console.log("aqui");

        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <>
            <div className="fixed z-50 flex items-center w-full h-16 justify-between mont-montserrat bg-[#003550]">
                <div onClick={() => router.push("/home")} className="w-[80%] px-4 cursor-pointer">
                    <Image src={"/catolica_png.png"} width={40} height={40} alt="logo catolica"></Image>
                </div>
                <div className="gap-3 flex items-center w-[60%] justify-end px-4 h-8  cursor-pointer text-white ">
                    <div className="flex gap-3">
                        <div onClick={() => router.push("/login")} className="flex items-center justify-center w-[5rem] h-full cursor-pointer border-1 border-solid rounded-md p-1 border-gray-500">
                            <span>Entrar</span>
                        </div>
                        <div onClick={() => router.push("/register")} className="flex items-center justify-center h-full border-1 border-solid rounded-md p-1 px-3 bg-white text-black">
                            <span>Registrar-se</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center w-fit pt-0.5">
                        <span style={{ fontSize: "1rem" }} onClick={() => handleTheme()} className={`cursor-pointer   ${theme == 'dark' ? "pi pi-moon" : "pi pi-sun"}`}></span>
                    </div>
                </div>

            </div>
        </>
    );
};
