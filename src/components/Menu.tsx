import { useCallback, useState } from "react";

import Image from "next/image";
import NaturalImage from "./NaturalImage";
import Link from "next/link";

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<
    "home" | "about" | "contact" | "catalogo"
  >("home");

  const handleClick = useCallback(
    (menu: "home" | "about" | "contact" | "catalogo") => {
      setMobileMenu(false);
      setActiveMenu(menu);
    },
    []
  );

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-screen items-center justify-between self-center bg-[#d4d4d4] px-[4.2%] shadow-sm shadow-[#666] ">
      <div className="relative h-36 w-36">
        <Image src="/logo.png" fill alt="Logotipo" className="object-cover" />
      </div>

      <div
        className="flex items-center justify-center min-[550px]:hidden"
        onClick={() => setMobileMenu(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#272727"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <ul
        className={`flex gap-7 ${
          mobileMenu ? "max-[550px]:top-0" : "max-[550px]:-top-[100vh]"
        } max-[550px]:z-1 transition-all max-[550px]:absolute max-[550px]:left-0 max-[550px]:h-screen max-[550px]:w-screen max-[550px]:flex-col max-[550px]:items-center max-[550px]:justify-center max-[550px]:gap-12 max-[550px]:bg-gray-400 max-[550px]:text-2xl`}
      >
        {mobileMenu && (
          <>
            <div
              className="text-bold absolute right-2 top-5 z-10 h-10 w-10 text-3xl"
              onClick={() => setMobileMenu(false)}
            >
              <NaturalImage src="/close.svg" alt="Close button" />
            </div>
          </>
        )}
        {activeMenu != "catalogo" ? (
          <>
            <li
              className={`after:transition-width after:relative after:left-0 after:bottom-[-4px] after:block after:h-[2px] after:bg-[#272727] after:duration-300 ${
                activeMenu == "home" ? "font-bold after:w-full" : "after:w-[0%]"
              }`}
            >
              <a onClick={() => handleClick("home")} href="#home">
                Home
              </a>
            </li>
            <li
              className={`after:transition-width after:relative after:left-0 after:bottom-[-4px] after:block after:h-[2px] after:bg-[#272727] after:duration-300 ${
                activeMenu == "about"
                  ? "font-bold after:w-full"
                  : "after:w-[0%]"
              }`}
            >
              <a onClick={() => handleClick("about")} href="#about">
                Sobre
              </a>
            </li>
            <li
              className={`after:transition-width after:relative after:left-0 after:bottom-[-4px] after:block after:h-[2px] after:bg-[#272727] after:duration-300 ${
                activeMenu == "contact"
                  ? "font-bold after:w-full"
                  : "after:w-[0%]"
              }`}
            >
              <a onClick={() => handleClick("contact")} href="#contact">
                Contato
              </a>
            </li>
            <li className="text-gray-400">
              <Link
                className="cursor-not-allowed"
                //onClick={() => handleClick("catalogo")}
                href=""
              >
                Catálogo
              </Link>
            </li>
          </>
        ) : (
          <li className="text-lg font-bold">
            <Link href="/" onClick={() => handleClick("home")}>
              Voltar
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
