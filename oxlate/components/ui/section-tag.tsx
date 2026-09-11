import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionTagProps extends React.HTMLAttributes<HTMLDivElement> {
  index: string | number;
  label: string;
  showPip?: boolean;
}

export function SectionTag({
  index,
  label,
  showPip = false,
  className,
  ...props
}: SectionTagProps) {
  const formattedIndex = typeof index === 'number' ? String(index).padStart(2, '0') : index;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#292929] border border-[#D9D4CC] rounded-[2px] bg-[#FAF8F5]/80 select-none',
        className
      )}
      {...props}
    >
      {showPip && <span className="h-1.5 w-1.5 rounded-full bg-[#A87445]" aria-hidden="true" />}
      <span className="font-orbitron font-bold text-[#A87445] tracking-widest">{formattedIndex}</span>
      <span className="text-[#D9D4CC]">//</span>
      <span className="font-mono text-xs text-[#292929]">{label}</span>
    </div>
  );
}
