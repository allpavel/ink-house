import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className=" md:bg-main-color-200">
      <div className="mx-auto flex max-w-6xl flex-col justify-between md:flex-row">
        <Logo className="p-4" />
        <Navbar />
      </div>
    </header>
  );
}
