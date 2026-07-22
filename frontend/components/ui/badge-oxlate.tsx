import { cn } from "@/lib/utils";

type BadgeProps = {
  variant?: "solid-tint" | "outline";
  children: React.ReactNode;
  className?: string;
};

export function Badge({ variant = "solid-tint", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-semibold tracking-widest uppercase",
        variant === "solid-tint" && "bg-primary-tint text-primary",
        variant === "outline" && "border border-primary text-primary bg-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
