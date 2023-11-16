import Card from "../ui/Card/Card";
import { franceCards } from "@/app/data";

export default function FranceTab({ isActive }: { isActive: boolean }) {
  return (
    <section
      className={`mx-auto ${isActive ? "grid" : "hidden"} max-w-6xl gap-7`}
    >
      {franceCards.map((card) => (
        <Card
          image={card.image}
          alt={card.alt}
          title={card.title}
          description={card.description}
          price={card.price}
          author={card.author}
          key={card.id}
        />
      ))}
    </section>
  );
}
