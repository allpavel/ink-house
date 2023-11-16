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
    <header className="flex min-w-fit shrink-0 flex-col overflow-x-auto overflow-y-hidden overscroll-x-contain py-5">
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
