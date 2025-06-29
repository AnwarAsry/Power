import { IoIosSearch } from "react-icons/io";
import type { Route } from "./+types/home";
import logo from "../assets/power-logo.svg";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoHeartOutline, IoLocationOutline, IoMenu } from "react-icons/io5";
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
          <a className="px-3 flex items-center gap-2" href="">
            <span>Mina favoriter</span>
            <IoHeartOutline className="size-5 text-[#f86701]" />
          </a>
        </div>
        <div id="header" className="pb-4 md:pb-0 flex items-center lg:rounded-lg bg-[#333]">
          {/* Menu box */}
          <div id="header-menu" className="my-4 mx-2 py-1 px-2 flex items-center rounded-md hover:cursor-pointer transition hover:bg-[#1f1f1f]">
            <IoMenu className="size-9 text-white" />
          </div>
          {/* Logo box */}
          <a id="header-logo" className="h-auto" aria-label="Till Powers startsida" href="/">
            <img className="w-32 h-full" loading="lazy" width={300} height={70} src={logo} alt="Power logan" />
          </a>
          {/* Search box */}
          <form id="header-search" className="relative mx-4" action="#">
            <div className="flex rounded-full bg-white">
              <input className="flex-grow p-2 pl-4 pr-12 border-none outline-none" type="text" placeholder="Sök efter vad du letar efter" />
              <button className="w-6 h-full absolute top-0 right-5" type="submit">
                <IoIosSearch className="size-7 text-[#f86701]" />
              </button>
            </div>
          </form>
          {/* Buttons box */}
          <div id="header-buttons" className="h-full flex items-center">
            <div className="px-2">
              <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-black text-white transition hover:cursor-pointer">
                <span className="text-sm hidden xl:block">Hitta Butik</span>
                <IoLocationOutline className="size-5 text-[#f86701]" />
              </a>
            </div>
            <div className="px-2">
              <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-black text-white transition hover:cursor-pointer">
                <span className="text-sm hidden xl:block">MyPOWER</span>
                <FiUser className="size-5 text-[#f86701]" />
              </a>
            </div>
            <div className="px-2 pr-6">
              <a className="py-2 px-3 flex items-center gap-3 relative rounded-md bg-[#f86701] text-white transition hover:cursor-pointer hover:bg-[#df5d01]">
                <span className="text-sm hidden xl:block">Kundvagn</span>
                <FiShoppingCart className="size-5" />
                <AmountIndicator />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main className="content-grid">
      <div className="content">
        <p className="bg-red-500">Welcome to the improved Power clone!</p>
      </div>
    </main>
  </>;
}
