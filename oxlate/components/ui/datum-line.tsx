import React from 'react';
import { cn } from '@/lib/utils';

export interface DatumLineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function DatumLine({
  orientation = 'horizontal',
  className,
  ...props
}: DatumLineProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'bg-[#D9D4CC]/60 pointer-events-none',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full',
        className
      )}
      {...props}
    />
  );
}
