import Card from "../ui/Card/Card";
import image1 from "@/public/france/01.jpg";

export default function FranceTab() {
  return (
    <section>
      <Card
        image={image1}
        alt={"Зеленый лес и Амур с луком"}
        author="Марсель Руссо"
        title="Охота Амура"
        description="Холст, масло (50х80)"
        price="14 500 руб"
      />
    </section>
  );
}
