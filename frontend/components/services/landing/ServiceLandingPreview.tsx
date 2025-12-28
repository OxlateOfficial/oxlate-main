// oxlate-main/frontend/components/services/landing/ServiceLandingPreview.tsx
"use client";

import { useEffect, useState } from "react";
import { useServiceSelection } from "@/hooks/useServiceSelection";
import ServiceLandingClient from "./ServiceLandingClient";

export default function ServiceLandingPreview({
  allLandings,
  initialLanding,
}: {
  allLandings: Record<string, any>;
  initialLanding: any;
}) {
  const { service } = useServiceSelection();
  const [landing, setLanding] = useState(initialLanding);

  useEffect(() => {
    if (!service || service === landing.id) return;
    
    // Get from preloaded data
    const newLanding = allLandings[service];
    if (newLanding) {
      setLanding(newLanding);
    }
  }, [service, allLandings, landing.id]);

  return <ServiceLandingClient landing={landing} />;
}