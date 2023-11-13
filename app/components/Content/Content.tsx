import FranceTab from "../FranceTab/FranceTab";
import TabHeader from "../TabHeader/TabHeader";

export default function Content() {
  return (
    <section className="bg-main-color-100">
      <div className="relative mx-auto flex flex-col overflow-hidden p-4">
        <h2 className="text-2xl font-medium">Репродукции</h2>
        <TabHeader />
        <section className="w-full">
          <FranceTab />
        </section>
      </div>
    </section>
  );
}
