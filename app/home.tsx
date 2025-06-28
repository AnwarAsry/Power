import { IoIosSearch } from "react-icons/io";
import type { Route } from "./+types/home";
import logo from "../assets/power-logo.svg";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Power clone improvement" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <header className="w-full h-19.5 fixed top-2">
      <div className="w-290 h-full mx-auto px-6 flex items-center rounded-lg bg-[#333]">
        {/* Menu box */}
        <div className="py-1 px-2 flex items-center rounded-md hover:cursor-pointer hover:bg-[#1f1f1f]">
          <IoMenu className="size-9 text-white" />
        </div>
        {/* Logo box */}
        <div className="w-32 h-fit mx-6">
          <a href="/">
            <img className="w-32 h-fit" src={logo} alt="" />
          </a>
        </div>
        {/* Search box */}
        <div className="w-full max-w-120 py-2 px-4 flex rounded-full bg-white">
          <input className="w-full pr-1 border-none outline-none" type="text" placeholder="Sök efter vad du letar efter" />
          <IoIosSearch className="size-7 text-[#f86701]" />
        </div>
        {/* Buttons box */}
        <div className="flex flex-1 justify-end gap-4">
          <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-black text-white">
            <span>MyPOWER</span>
            <FiUser className="size-5" />
          </a>
          <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-[#f86701] text-white">
            <FiShoppingCart className="size-5" />
            <span className="min-w-[20px] h-[20px] px-1 flex items-center justify-center absolute -top-2 -right-2 rounded-full text-xs text-center bg-white text-black">3</span>
          </a>
        </div>
      </div>
    </header>
    <div className="content-container">
      <p className="bg-red-500">Welcome to the improved Power clone!</p>
    </div>
  </>;
}
