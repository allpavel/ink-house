export default function Hero() {
  return (
    <section className="bg-main-color-100 font-raleway">
      <div className="mx-auto max-w-7xl px-4  py-14">
        <h1 className="max-w-[284px] pb-5 text-3xl font-medium">
          Реплики картрин от{" "}
          <span className="font-bold text-main-color-400">Ink. House</span>
        </h1>
        <p className="pb-10 text-gray-500">
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
    </section>
  );
}
