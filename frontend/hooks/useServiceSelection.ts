"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useServiceSelection() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [service, setServiceState] = useState<string>(
    searchParams.get("service") || "web-development"
  );

  useEffect(() => {
    const currentService = searchParams.get("service") || "web-development";
    setServiceState(currentService);
  }, [searchParams]);

  const setService = useCallback(
    (newService: string) => {
      setServiceState(newService);
      const params = new URLSearchParams(searchParams.toString());
      params.set("service", newService);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return { service, setService };
}