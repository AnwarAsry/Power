import { IoIosSearch } from "react-icons/io";
import type { Route } from "./+types/home";
import logo from "../assets/power-logo.svg";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Power clone improvement" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <header className="w-full h-19.5 fixed top-2">
      <div className="w-270 h-full mx-auto px-6 flex items-center rounded-lg bg-[#333]">
        <div className="w-32 h-fit mr-6">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="w-full max-w-120 py-2 px-4 flex rounded-full bg-white">
          <input className="w-full pr-1 border-none outline-none" type="text" placeholder="Sök efter vad du letar efter" />
          <IoIosSearch className="size-7 text-orange-400" />
        </div>
      </div>
      {/* <nav className="w-fit h-full flex items-center mx-auto">
        <ul className="flex items-center gap-5">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav> */}
    </header>
    <div className="content-container">
      <p className="bg-red-500">Welcome to the improved Power clone!</p>
    </div>
  </>;
}
