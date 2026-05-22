'use client';

import { useActiveSection } from '@/context/active-section-context';
import type { SectionName } from '@/lib/types';
import { useInView } from 'motion/react';
import { useEffect, useRef, type RefObject } from 'react';

export function useSectionInView<T extends HTMLElement = HTMLElement>(
  sectionName: SectionName,
  amount: number | 'some' | 'all' = 0.5,
  externalRef?: RefObject<T | null>
) {
  const internalRef = useRef<T>(null);
  const ref = externalRef ?? internalRef;
  const inView = useInView(ref, { amount });
  const { setActiveSection, timeOfLastClicked } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClicked, sectionName, setActiveSection]);

  return { ref };
}
