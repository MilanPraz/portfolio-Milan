"use client";

import Link from "next/link";
import Navlink from "../sub/Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuOverlay from "../sub/MenuOverlay";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navLinks = [
    { path: "about", title: "About" },
    { path: "projects", title: "Projects" },
    { path: "contact", title: "Contact" },
  ];
  return (
    <nav className=" fixed top-0 left-0 right-0 z-40 bg-[#121212]  bg-opacity-100">
      <div className=" flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link href={"/"} className=" text-3xl md:text-4xl text-white">
          PRAZ
        </Link>
        {/* mobile menu */}
        <div className=" block md:hidden">
          {openNavbar === false ? (
            <button
              onClick={() => setOpenNavbar(true)}
              className=" text-slate-200 flex items-center border border-slate-200 rounded-md px-3 py-2 hover:text-white hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setOpenNavbar(false)}
              className=" text-slate-200 flex items-center border border-slate-200 rounded-md px-3 py-2 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* navbar menu */}
        <div className=" menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex cursor-pointer p-4 md:p-0 sm:flex-row md:space-x-8 ">
            {navLinks.map((link, index) => (
              <li className=" cursor-pointer" key={index}>
                <Navlink
                  className="cursor-pointer"
                  path={link.path}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openNavbar === true ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
