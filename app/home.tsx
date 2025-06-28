import { IoIosSearch } from "react-icons/io";
import type { Route } from "./+types/home";
import logo from "../assets/power-logo.svg";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoLocationOutline, IoMenu } from "react-icons/io5";
import { Headset } from "lucide-react";
import { AmountIndicator } from "components/cart/AmountIndicator";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Power clone improvement" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <header className="w-full sticky top-0">
      <div className="w-full lg:w-250 xl:w-300 mt-0 lg:mt-3 xl:mt-0 mx-auto">
        <div className="h-10 hidden items-center xl:flex">
          <a className="px-3 flex items-center gap-1 transition hover:underline" href="/kundtjanst">
            <Headset className="size-5 text-[#f86701]" />
            <span>Kundtjänst</span>
          </a>
          <div className="ml-3 flex-1">
            <a className="px-3 first:border-r first:border-gray-300 transition hover:underline" href="/">Privatkund</a>
            <a className="px-3 first:border-r first:border-gray-300 transition hover:underline" href="/foretag">Företagskund</a>
          </div>
        </div>
        <div className="h-19.5 px-3 lg:px-6 flex items-center lg:rounded-lg bg-[#333]">
          {/* Menu box */}
          <div className="py-1 px-2 flex items-center rounded-md hover:cursor-pointer transition hover:bg-[#1f1f1f]">
            <IoMenu className="size-9 text-white" />
          </div>
          {/* Logo box */}
          <div className="w-32 h-full mx-6">
            <a href="/">
              <img className="w-32 h-full" src={logo} alt="" />
            </a>
          </div>
          {/* Search box */}
          <div className="w-full max-w-120 py-2 px-4 flex rounded-full bg-white">
            <input className="w-full pr-1 border-none outline-none" type="text" placeholder="Sök efter vad du letar efter" />
            <IoIosSearch className="size-7 text-[#f86701]" />
          </div>
          {/* Buttons box */}
          <div className="flex flex-1 justify-end gap-4">
            <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-black text-white transition hover:cursor-pointer">
              <span className="text-sm hidden xl:block">Hitta Butik</span>
              <IoLocationOutline className="size-5 text-[#f86701]" />
            </a>
            <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-black text-white transition hover:cursor-pointer">
              <span className="text-sm hidden xl:block">MyPOWER</span>
              <FiUser className="size-5 text-[#f86701]" />
            </a>
            <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-[#f86701] text-white transition hover:cursor-pointer hover:bg-[#df5d01]">
              <span className="text-sm hidden xl:block">Kundvagn</span>
              <FiShoppingCart className="size-5" />
              <AmountIndicator />
            </a>
          </div>
        </div>
      </div>
    </header>
    <div className="content-grid-container">
      <div className="content">
        <p className="bg-red-500">Welcome to the improved Power clone!</p>
      </div>
    </div>
  </>;
}
