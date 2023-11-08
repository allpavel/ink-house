import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex flex-col justify-between md:flex-row md:bg-main-color-200">
      <Logo />
      <Navbar />
    </header>
  );
}
