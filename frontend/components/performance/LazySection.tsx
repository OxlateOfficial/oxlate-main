"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function LazySection({ children }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    const el = document.getElementById("lazy-section");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return <div id="lazy-section">{visible ? children : null}</div>;
}
