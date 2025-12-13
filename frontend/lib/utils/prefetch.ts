import { useRouter } from "next/navigation";

export function usePrefetchService(service: string) {
  const router = useRouter();

  return () => {
    router.prefetch(`/services/${service}`);
  };
}
