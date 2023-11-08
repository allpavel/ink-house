"use client";

import { useState } from "react";
import OpenMenu from "../ui/OpenMenu/OpenMenu";
import CloseMenu from "../ui/CloseMenu/CloseMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <nav
      role="navigation"
      aria-label="Main menu"
      className="relative flex flex-col items-start bg-main-color-200 p-4"
    >
      <button
        onClick={toggleMenu}
        className="cursor-pointer"
        aria-expanded={isOpen}
      >
        {isOpen ? <CloseMenu /> : <OpenMenu />}
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </button>
      <div
        className={`${
          isOpen ? "fixed block overflow-hidden" : "hidden"
        } absolute left-0 right-0 top-14 flex flex-col bg-main-color-200`}
      >
        <a
          href="#reprotukzii"
          className="mb-2 border-2 border-transparent bg-main-color-200 p-4 active:border-2 active:border-main-color-400"
          onClick={toggleMenu}
        >
          Репродукции
        </a>
        <a
          href="#novinki"
          className="mb-2 border-2 border-transparent bg-main-color-200 p-4 active:border-2 active:border-main-color-400"
          onClick={toggleMenu}
        >
          Новинки
        </a>
        <a
          href="#onas"
          className="border-2 border-transparent bg-main-color-200 p-4 active:border-2 active:border-main-color-400"
          onClick={toggleMenu}
        >
          О нас
        </a>
      </div>
    </nav>
  );
}
