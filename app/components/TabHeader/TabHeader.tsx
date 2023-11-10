"use client";

import { useState } from "react";
import TabLink from "../ui/TabLink/TabLink";

export default function TabHeader() {
  const [activeTab, setActiveTab] = useState("franzia");

  const handleActiveTab = (name: string) => {
    setActiveTab(name);
  };

  return (
    <header className="py-5">
      <nav className="flex gap-5">
        <TabLink
          hash="franzia"
          title="Франция"
          value="franzia"
          setActive={handleActiveTab}
          active={"franzia" === activeTab}
        />
        <TabLink
          hash="germania"
          title="Германия"
          setActive={handleActiveTab}
          active={"germania" === activeTab}
          value="germania"
        />
        <TabLink
          hash="anglia"
          title="Англия"
          setActive={handleActiveTab}
          active={"anglia" === activeTab}
          value="anglia"
        />
      </nav>
    </header>
  );
}
