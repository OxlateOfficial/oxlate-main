declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(
  event: string,
  params: Record<string, any> = {}
) {
  if (!window.gtag) return;

  window.gtag("event", event, params);
}
