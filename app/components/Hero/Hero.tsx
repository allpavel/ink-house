import Image from "next/image";
import heroImage from "@/public/hero.png";

export default function Hero() {
  return (
    <section className="bg-main-color-100 font-raleway">
      <div className="mx-auto max-w-6xl gap-8 px-4 py-14 sm:flex sm:items-center sm:justify-center sm:pt-0">
        <div className="rotate-Y hidden sm:block sm:max-w-[330px] lg:max-w-[540px]">
          <Image src={heroImage} alt="A brown bird sits on a branch" />
        </div>
        <div>
          <h1 className="max-w-[284px] pb-5 text-3xl font-medium sm:max-w-[330px] sm:text-4xl lg:max-w-[540px] lg:text-6xl">
            Реплики картрин от{" "}
            <span className="font-bold text-main-color-400">Ink. House</span>
          </h1>
          <p className="pb-10 text-gray-500 sm:max-w-[330px] md:max-w-[540px] md:text-lg lg:pb-14">
            Высокое качество отрисовки на плотной бумаге или льняном холсте.
            Редкие произведения, доступные цены.
          </p>
          <a
            href="#produkzia"
            className="border-2 border-main-color-400 px-8 py-4 text-main-color-400 transition-colors hover:bg-main-color-400 hover:text-white"
          >
            Продукция
          </a>
        </div>
      </div>
    </section>
  );
}
