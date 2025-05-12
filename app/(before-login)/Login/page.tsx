import Image from "next/image";

export default function Login() {
  return (
    <div className="w-[25%] h-[30%] bg-[#EDEDED] rounded-lg shadow-2xl">
      <div className="flex justify-center pt-2 mb-[10%]">
        <p className="font-semibold text-xl text-gray-800">Acesse sua conta</p>
      </div>
      <div className="w-full h-full flex justify-center">
        <li className="w-fit h-[2rem] border-2">
          <input className="min-w-[10rem]" type="text" />
          <i className="pi pi-user"></i>
        </li>
      </div>
    </div>
  );
}