import { cn } from "@/lib/utils";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function Divider({ orientation = "horizontal", className }: DividerProps) {
  if (orientation === "vertical") {
    return <div className={cn("w-px self-stretch bg-border", className)} />;
  }
  return <div className={cn("h-px w-full bg-border", className)} />;
}
