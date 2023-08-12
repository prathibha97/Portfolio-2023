'use client'
import { links } from '@/lib/data';
import React, { createContext, useContext, useState } from 'react';

type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setActiveSection,
    }}>{children}</ActiveSectionContext.Provider>
  );
}


export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error('useActiveSection must be used within an ActiveSectionContextProvider');
  }
  return context;
}