import { log } from "console";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useUser } from '../../../Components/UserContext';

export default function RegisterSquare() {
  const { setUser } = useUser();
  const [user, setUserLogin] = useState<any>({
      email: "",
      password: "",
      invites: [],
      friends: []
    });

  useEffect(() => {
    console.log(user);
    
  }, [user]);

  const handleRegister = async () => {
    const response = await fetch("http://127.0.0.1:8092/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("access_token", data.access_token);
    setUser({
      email: "",
      token : data.access_token,
      img : data.img || "",
    })
  };
  
  return (
    <div className="">
      <div className="flex justify-center pt-4 mb-[5%]">
        <p className="font-semibold text-xl text-[#003550]">Crie sua conta</p>
      </div>
      <div className="w-full h-full flex items-center flex-col gap-4">
        <div className="w-fit h-[2rem] border-2 border-[#003550] flex items-center p-2 rounded-md shadow-xl">
          <input onChange={(event)=>{
            setUserLogin({
              ...user,
              email: event.target.value
            })
          }} className="min-w-[10rem] outline-0 py-2" type="text" placeholder="E-mail" />
          <i className="pi pi-user text-[#003550]"></i>
        </div>
        <div className="w-fit h-[2rem] border-2 border-[#003550] flex items-center p-2 rounded-md shadow-xl">
          <input onChange={(event)=>{
            setUserLogin({
              ...user,
              password: event.target.value
            })
          }}
          className="min-w-[10rem] outline-0 py-2" type="password" placeholder="Senha" />
          <i className="pi pi-lock text-[#003550]"></i>
        </div>
        <div className="w-fit h-[2rem] border-2 border-[#003550] flex items-center p-2 rounded-md shadow-xl">
          <input 
          // onChange={(event)=>{
          //   setUser({
          //     ...user,
          //     ConfirmPassword: event.target.value
          //   })
          // }}
           className="min-w-[10rem] outline-0 py-2" type="password" placeholder="Confirmar Senha" />
          <i className="pi pi-lock text-[#003550]"></i>
        </div>

        <motion.div
          onClick={()=>{handleRegister()}}
          whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
          whileTap={{ scale: 0.95 }}
          className="
                cursor-pointer px-6 py-2 rounded-md
                bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                bg-[length:200%_100%] text-white mt-[3%]
              "
        >
          Criar conta
        </motion.div>
      </div>
    </div>
  )
}