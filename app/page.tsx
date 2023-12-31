import Content from "./components/Content/Content";
import AboutUs from "./components/AboutUs/AboutUs";
import CallToAction from "./components/CallToAction/CallToAction";
import Hero from "./components/Hero/Hero";

export default function MainPage() {
  return (
    <>
      <Hero />
      <Content />
      <CallToAction />
      <AboutUs />
    </>
  );
}
