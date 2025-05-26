'use client'


import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useUser } from '@/src/contexts/UserContext';
import { useButtonContext } from "@/src/contexts/ThemeContext";

export default function RegisterSquare() {
  const [theme, setTheme] = useState<string>('light');
  const { buttonState } = useButtonContext();

  useEffect(() => {
    setTheme(buttonState === "light" ? "light" : "dark");
  });
  const { setUser } = useUser();
  const [user, setUserLogin] = useState<any>({
    email: "",
    password: "",
    invites: [],
    friends: []
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleRegister = async () => {
    if (user.password !== confirmPassword) {
      setError(true);
      return;
    }
    setError(false);

    const response = await fetch("http://10.1.11.107:8092/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    localStorage.setItem("access_token", data.access_token);
    setUser({
      email: "",
      token: data.access_token,
      img: data.img || "",
    });
  };

  return (
    <div className="">
      <div className="flex justify-center pt-6 mb-[6%]">
        <p className={`font-semibold text-2xl ${buttonState == "light" ? "text-[#003550]" : "text-[#6EB8DE]"}`}>Crie sua conta</p>
      </div>
      <div className="w-full h-full flex items-center flex-col gap-4">
        <div className={`w-fit h-[3rem] ${theme == "light" ? "bg-white" : "shadow-gray-600"} flex items-center p-2 rounded-md shadow-md ${error && !user.email.includes('@') && !user.email.includes('.') ? "border-2 border-red-500" : ""}`}>
          <input
            onChange={(event) => {
              setUserLogin({
                ...user,
                email: event.target.value
              });
            }}
            className="min-w-[17rem] outline-0 py-2 text-gray-400"
            type="text"
            placeholder="E-mail"
          />
          <i className={`pi pi-user ${theme == "light" ? "text-[#003550]" : "text-[#6EB8DE]"}`}></i>
        </div>
        <div className={`w-fit h-[3rem] ${theme == "light" ? "bg-white" : "shadow-gray-600"} flex items-center p-2 rounded-md shadow-md`}>
          <input
            onChange={(event) => {
              setUserLogin({
                ...user,
                password: event.target.value
              });
            }}
            className="min-w-[17rem] outline-0 py-2 text-gray-400"
            type="password"
            placeholder="Senha"
          />
          <i className={`pi pi-lock ${theme == "light" ? "text-[#003550]" : "text-[#6EB8DE]"}`}></i>
        </div>
        <div className={`w-fit h-[3rem] ${theme == "light" ? "bg-white" : "shadow-gray-600"} flex items-center p-2 rounded-md shadow-md ${error && user.password !== confirmPassword ? "border-2 border-red-500" : ""}`}>
          <input
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            className="min-w-[17rem] outline-0 py-2 text-gray-400"
            type="password"
            placeholder="Confirmar Senha"
          />
          <i className={`pi pi-lock ${theme == "light" ? "text-[#003550]" : "text-[#6EB8DE]"}`}></i>
        </div>
        <p className={`text-red-500 -translate-y-1 ${error && user.password !== confirmPassword ? 'visible' : 'invisible'} text-sm`}>
          A senha não coincide
        </p>
        <p className={`text-red-500 -translate-y-4  ${error && (!user.email.includes('@') || !user.email.includes('.')) ? 'visible' : 'invisible'} text-sm`}>
          Insira um e-mail válido
        </p>
        <motion.div
          onClick={() => {
            if (!user.email.includes('@') || !user.email.includes('.')) {
              setError(true);
              return;
            }
            if (user.password !== confirmPassword) {
              setError(true);
              return;
            }
            setError(false);
            handleRegister();
          }}
          whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
          whileTap={{ scale: 0.95 }}
          className={`
                cursor-pointer px-6 py-2 rounded-md
                bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                bg-[length:200%_100%] text-white ${error ? "mt-[-5%]" : "mt-[-12%]"}
              `}
        >
          Criar conta
        </motion.div>
      </div>
    </div>
  );
}