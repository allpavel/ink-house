import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  price: string;
  alt: string;
  author: string;
}

export default function Card({
  image,
  alt,
  title,
  description,
  price,
  author,
}: CardProps) {
  return (
    <article>
      <figure>
        <Image src={image} alt={alt} />
        <figcaption>{author}</figcaption>
      </figure>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button>Купить</button>
    </article>
  );
}
