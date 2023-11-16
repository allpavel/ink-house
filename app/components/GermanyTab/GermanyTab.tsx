import Card from "../ui/Card/Card";
import { germanyCards } from "@/app/data";

export default function GermanyTab({ isActive }: { isActive: boolean }) {
  return (
    <section
      className={`mx-auto ${isActive ? "grid" : "hidden"} max-w-6xl gap-7`}
    >
      {germanyCards.map((card) => (
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
