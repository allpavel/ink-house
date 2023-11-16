"use client";

import { useState } from "react";
import FranceTab from "../FranceTab/FranceTab";
import GermanyTab from "../GermanyTab/GermanyTab";
import EnglandTab from "../EnglandTab/EnglandTab";
import TabHeader from "../TabHeader/TabHeader";

export default function Content() {
  const [activeTab, setActiveTab] = useState("franzia");

  return (
    <section className="bg-main-color-100">
      <div className="relative mx-auto flex flex-col overflow-hidden p-4">
        <h2 className="text-2xl font-medium">Репродукции</h2>
        <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <FranceTab isActive={activeTab === "franzia"} />
        <GermanyTab isActive={activeTab === "germania"} />
        <EnglandTab isActive={activeTab === "anglia"} />
      </div>
    </section>
  );
}
