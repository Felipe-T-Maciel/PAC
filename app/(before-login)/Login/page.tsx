import Image from "next/image";

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
      
      
        <div 
          className="w-fit h-[2rem] border-2 border-[#003550] text-[#003550] flex items-center p-2 rounded-md shadow-xl
          transition-transform duration-300 hover:scale-105 hover:text-white cursor-pointer hover:bg-gradient-to-r hover:from-[#71C9F5] hover:via-[#3E7B9A] hover:to-[#003550]">
            <button className="px-2 cursor-pointer">
            Entrar
            </button>
        </div>
      </div>
    </div>
  );
}