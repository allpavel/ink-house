import { StaticImageData } from "next/image";
import Card from "../Card/Card";

interface CardItem {
  id: number;
  image: StaticImageData;
  alt: string;
  author: string;
  title: string;
  description: string;
  price: string;
}

interface TabListProps {
  isActive: boolean;
  cards: CardItem[];
}

export default function TabList({ isActive, cards }: TabListProps) {
  return (
    <section
      className={`mx-auto ${isActive ? "grid" : "hidden"} max-w-6xl gap-7`}
    >
      {cards.map((card) => (
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
