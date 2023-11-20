import Image from "next/image";
import mainImage from "@/public/aboutUs.png";
import person1 from "@/public/Ellipse 30.png";
import person2 from "@/public/Ellipse 31.png";
import person3 from "@/public/Ellipse 32.png";

export default function AboutUs() {
  return (
    <section className="bg-main-color-100 font-medium" id="onas">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:flex lg:items-center lg:gap-5">
        <div className="mb-7">
          <Image src={mainImage} alt="" />
        </div>
        <div className="max-w-2xl">
          <h2 className="mb-5 text-2xl lg:text-4xl">Наша команда</h2>
          <p className="mb-5 lg:text-lg">
            Значимость этих проблем настолько очевидна, что базовый вектор
            развития позволяет оценить значение экспериментов, поражающих по
            своей масштабности и грандиозности. Мы вынуждены отталкиваться от
            того, что консультация с широким активом.
          </p>
          <div className="flex items-center justify-center gap-6 lg:justify-start">
            <Image src={person1} alt="" width={80} height={80} />
            <Image src={person2} alt="" width={80} height={80} />
            <Image src={person3} alt="" width={80} height={80} />
          </div>
        </div>
      </div>
    </section>
  );
}
