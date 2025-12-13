"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SERVICES } from "@/lib/constants/services";

const DEFAULT_SERVICE = "web-development";

export function useServiceSelection() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [service, setService] = useState<string>(DEFAULT_SERVICE);

  // On first load
  useEffect(() => {
    const urlService = searchParams.get("service");
    const storedService = localStorage.getItem("oxlate-service");

    const validService = SERVICES.find(
      (s) => s.id === urlService || s.id === storedService
    );

    if (validService) {
      setService(validService.id);
    }
  }, []);

  // When service changes
  useEffect(() => {
    // localStorage.setItem("oxlate-service", service);
    router.replace(`/?service=${service}`, { scroll: false });
  }, [service]);

  return {
    service,
    setService,
  };
}
