import { motion } from "motion/react";
import { useState } from "react";
import { useUser } from '../../../Components/UserContext';

export default function LoginSquare() {
  const { setUser } = useUser();
  const [user, setUserLogin] = useState<any>({
    email: "",
    password: ""
  });

  const handleRegister = async () => {
    const response = await fetch("http://127.0.0.1:8092/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("access_token", data.access_token);
    if (data.user.email != undefined) {
      setUser({
        email: data.user.email,
        token: data.access_token,
        img: data.img || "",
      });

    }
  };

  return (
    <div className="h-fit">
      <div className="flex justify-center pt-4 mb-[6%]">
        <p className="font-semibold pt-2 text-2xl text-[#003550]">Acesse sua conta</p>
      </div>
      <div className="w-full h-full flex items-center flex-col gap-4">
        <div className="w-fit h-[3rem] flex items-center p-2 rounded-md shadow-md">
          <input
            onChange={(event) => {
              setUserLogin({
                ...user,
                email: event.target.value
              })
            }}
            className="min-w-[17rem] outline-0 py-2" type="text" placeholder="E-mail" />
          <i className="pi pi-user text-[#003550]"></i>
        </div>
        <div className="w-fit h-[3rem] flex items-center p-2 rounded-md shadow-md">
          <input
            onChange={(event) => {
              setUserLogin({
                ...user,
                password: event.target.value
              })
            }}
            className="min-w-[17rem] outline-0 py-2" type="password" placeholder="Senha" />
          <i className="pi pi-lock text-[#003550]"></i>
        </div>
        <motion.div
          onClick={handleRegister}
          whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
          whileTap={{ scale: 0.95 }}
          className="
                cursor-pointer px-8 py-2 rounded-md
                bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                bg-[length:200%_100%] text-white mt-[5%]
              "
        >
          Entrar
        </motion.div>
      </div>
    </div>
  )
}