'use client';
import React from 'react';
import { SVG_REGISTRY } from './SvgRegistry';

type Props = {
  name: keyof typeof SVG_REGISTRY;
  className?: string;
  stroke?: string;
};

export default function SvgRenderer({ name, className, stroke }: Props) {
  const Svg = SVG_REGISTRY[name];
  return <Svg className={className} stroke={stroke} />;
}
