import { sectionLinks } from '../data';

export type SectionName = (typeof sectionLinks)[number]['name'] | 'Home';
