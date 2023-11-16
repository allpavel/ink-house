"use client";

import { useState } from "react";
import TabHeader from "../TabHeader/TabHeader";
import TabList from "../ui/TabList/TabList";
import { germanyCards, englandCards, franceCards } from "@/app/data";

export default function Content() {
  const [activeTab, setActiveTab] = useState("franzia");

  return (
    <section className="bg-main-color-100">
      <div className="relative mx-auto flex flex-col overflow-hidden p-4">
        <h2 className="text-2xl font-medium">Репродукции</h2>
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabList isActive={activeTab === "franzia"} cards={franceCards} />
        <TabList isActive={activeTab === "germania"} cards={germanyCards} />
        <TabList isActive={activeTab === "anglia"} cards={englandCards} />
      </div>
    </section>
  );
}
