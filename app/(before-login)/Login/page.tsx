import Image from "next/image";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="w-[25%] h-[33%] bg-[#EDEDED] rounded-lg shadow-2xl">
      <div className="flex justify-center pt-4 mb-[10%]">
        <p className="font-semibold text-xl text-[#003550]">Acesse sua conta</p>
      </div>
      <div className="w-full h-full flex items-center flex-col gap-4">
        <div className="w-fit h-[2rem] border-2 border-[#003550] flex items-center p-2 rounded-md shadow-xl">
          <input className="min-w-[10rem] outline-0 py-2" type="text" placeholder="Nome de usuário" />
          <i className="pi pi-user text-[#003550]"></i>
        </div>
        <div className="w-fit h-[2rem] border-2 border-[#003550] flex items-center p-2 rounded-md shadow-xl">
          <input className="min-w-[10rem] outline-0 py-2" type="password" placeholder="Senha" />
          <i className="pi pi-lock text-[#003550]"></i>
        </div>
        <div className="w-[55%]"><p className="cursor-pointer text-end text-sm text-[#003550] underline">Registre-se</p></div>


        {/* <motion.div
          whileHover={{ scale: 1.05, backgroundPosition: "100% 0%", transition: { duration: 0.4, ease: "easeOut" } }}
          whileTap={{ scale: 0.95 }}
          className="
                cursor-pointer px-6 py-2 rounded-md
                bg-gradient-to-br from-[#3E7B9A] via-[#003550] to-[#003550]
                bg-[length:200%_100%] text-white
              "
        >
          Começar estudos
        </motion.div> */}
      </div>
    </div>
  );
}