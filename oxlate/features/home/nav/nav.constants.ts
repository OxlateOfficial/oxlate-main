export interface NavSection {
  id: string;
  index: string;
  label: string;
  href: string;
}

export const NAV_SECTIONS: readonly NavSection[] = [
  { id: 'intro', index: '01', label: 'INTRO', href: '#intro' },
  { id: 'capabilities', index: '02', label: 'CAPABILITIES', href: '#capabilities' },
  { id: 'work', index: '03', label: 'WORK', href: '#work' },
  { id: 'approach', index: '04', label: 'APPROACH', href: '#approach' },
  { id: 'about', index: '05', label: 'ABOUT', href: '#about' },
  { id: 'contact', index: '06', label: 'CONTACT', href: '#contact' },
] as const;

export const TOTAL_SECTIONS_COUNT = NAV_SECTIONS.length;
export const TOTAL_SECTIONS_FORMATTED = '06';
