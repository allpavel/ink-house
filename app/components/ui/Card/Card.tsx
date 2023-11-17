import Image, { StaticImageData } from "next/image";
import { useId } from "react";

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
  const authorId = useId();
  const titleId = useId();
  const priceId = useId();
  const descriptionId = useId();

  return (
    <article
      className="bg-main-color-200 p-5 font-medium"
      aria-label={`${authorId} ${titleId}`}
      aria-describedby={`${descriptionId} ${priceId}`}
    >
      <figure>
        <Image src={image} alt={alt} className="h-64 w-64" />
        <figcaption className="py-3 text-black-200" id={authorId}>
          {author}
        </figcaption>
      </figure>
      <h3 className="pb-3 text-2xl" id={titleId}>
        {title}
      </h3>
      <p className="pb-7" id={descriptionId}>
        {description}
      </p>
      <p className="pb-3 text-main-color-400" id={priceId}>
        {price}
      </p>
      <button className="w-full border-2 border-main-color-400 bg-transparent px-14 py-4 text-main-color-400 transition-colors hover:bg-main-color-400 hover:text-white">
        Купить
      </button>
    </article>
  );
}
