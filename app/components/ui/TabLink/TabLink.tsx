import { AnchorHTMLAttributes } from "react";

type TabLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  hash: string;
  title: string;
  value: string;
  active: boolean;
  setActive: (name: string) => void;
};

export default function TabLink({
  hash,
  title,
  value,
  active,
  setActive,
  ...props
}: TabLinkProps) {
  return (
    <a
      href={`#${hash[0] === "#" ? hash.slice(1) : hash}`}
      className={`inline-flex items-center whitespace-nowrap rounded-3xl bg-main-color-200 px-5 py-3${
        active ? " bg-main-color-400 text-white" : ""
      }`}
      onClick={() => setActive(value)}
      {...props}
    >
      {title}
    </a>
  );
}
