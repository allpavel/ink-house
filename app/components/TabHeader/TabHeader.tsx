"use client";

import TabLink from "../ui/TabLink/TabLink";

interface TabProps {
  activeTab: string;
  setActiveTab: (name: string) => void;
}

export default function TabHeader({ activeTab, setActiveTab }: TabProps) {
  const handleActiveTab = (name: string) => {
    setActiveTab(name);
  };

  return (
    <header className="flex flex-col py-5">
      <nav className="scroll-width-none flex gap-5 overflow-x-auto overflow-y-hidden overscroll-contain whitespace-nowrap">
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
