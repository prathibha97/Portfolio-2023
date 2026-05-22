'use client';

import type { SectionName } from '@/lib/types';
import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

type Ctx = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClicked: number;
  setTimeOfLastClicked: Dispatch<SetStateAction<number>>;
};

const ActiveSectionContext = createContext<Ctx | null>(null);

export default function ActiveSectionContextProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClicked, setTimeOfLastClicked] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClicked, setTimeOfLastClicked }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) throw new Error('useActiveSection must be used inside ActiveSectionContextProvider');
  return ctx;
}
