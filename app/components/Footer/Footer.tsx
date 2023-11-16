import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-main-color-200 font-medium">
      <div className="footer-grid-areas mx-auto grid max-w-6xl gap-5 px-4 py-6">
        <div className="grid-logo flex">
          <Logo />
        </div>
        <div className="grid-tel">
          <h3>
            <a href="tel:+7 (999) 123-45-67">+7 (999) 123-45-67</a>
          </h3>
          <a
            href="/masterskaya"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            Мастерская
          </a>
        </div>
        <div className="grid-repr">
          <h3>
            <a href="/reprodukzii">Репродукции</a>
          </h3>
          <a
            href="/franzia"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            Франция
          </a>
          <a
            href="/germania"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            Германия
          </a>
          <a
            href="/anglia"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            Англия
          </a>
        </div>
        <div className="grid-novinki">
          <h3>
            <a href="/novinki">Новинки</a>
          </h3>
          <a
            href="/2022"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            2022
          </a>
          <a
            href="/2021"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            2021
          </a>
        </div>
        <div className="grid-about">
          <h3>
            <a href="/about">О нас</a>
          </h3>
          <a
            href="/hudozhniki"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            Художники
          </a>
          <a
            href="/komanda"
            className="block text-black-200 transition-colors hover:text-black-300"
          >
            Команда
          </a>
        </div>

        <div className="grid-social mx-4 mt-5 border-2 border-t-main-color-300 sm:mx-0 sm:mt-0 sm:border-0">
          <div className="flex items-center justify-center gap-8 pt-5 sm:justify-start sm:pt-0">
            <a
              href="https://www.facebook.com"
              className="block transition-colors hover:text-main-color-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare className="h-6 w-full" size={2} />
            </a>
            <a
              href="https://www.instagram.com"
              className="block transition-colors hover:text-main-color-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiFillInstagram className="h-6 w-full" size={2} />
            </a>
            <a
              href="https://www.youtube.com"
              className="block transition-colors hover:text-main-color-400"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube className="h-6 w-full" size={2} />
            </a>
          </div>
          <p className="pt-3 text-center text-black-200 sm:text-start">
            Ink. House ® All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
