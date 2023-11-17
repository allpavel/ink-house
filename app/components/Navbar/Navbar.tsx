"use client";

import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import OpenMenu from "../ui/OpenMenu/OpenMenu";
import CloseMenu from "../ui/CloseMenu/CloseMenu";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      className="relative flex bg-main-color-200 p-4 sm:justify-between sm:px-4 sm:py-0 md:gap-14"
    >
      <div className="flex grow items-center justify-between sm:hidden sm:grow-0 ">
        <button
          onClick={toggleMenu}
          className="cursor-pointer"
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseMenu /> : <OpenMenu />}
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "fixed block overflow-hidden" : "hidden sm:flex"
        } absolute left-0 right-0 top-14 flex flex-col bg-main-color-200 sm:static sm:flex-row sm:items-center md:gap-14`}
      >
        <Link
          href="#reprodukzii"
          className="mb-2 border-2 border-transparent bg-main-color-200 p-4 active:border-2 active:border-main-color-400 sm:mb-0 sm:pl-0"
          onClick={toggleMenu}
        >
          Репродукции
        </Link>
        <Link
          href="#novinki"
          className="mb-2 border-2 border-transparent bg-main-color-200 p-4 active:border-2 active:border-main-color-400 sm:mb-0"
          onClick={toggleMenu}
        >
          Новинки
        </Link>
        <Link
          href="#onas"
          className="border-2 border-transparent bg-main-color-200 p-4 active:border-2 active:border-main-color-400"
          onClick={toggleMenu}
        >
          О нас
        </Link>
      </div>
      <button>
        <BsCart3 className="h-6 w-full" />
      </button>
    </nav>
  );
}
