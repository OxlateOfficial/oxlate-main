"use client";

import { useEffect, useRef } from "react";
import { useServiceSelection } from "@/hooks/useServiceSelection";
import { ServiceId } from "@/lib/constants/services";

export default function InitService({ service }: { service: ServiceId }) {
  const { setService } = useServiceSelection();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    setService(service);
    initialized.current = true;
  }, [service, setService]);

  return null;
}
