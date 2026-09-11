import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#A87445] text-white hover:bg-[#B98250] hover:-translate-y-[1px] transition-all duration-150 rounded-[2px] font-mono uppercase tracking-wider shadow-none",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 rounded-[2px]",
        outline:
          "border border-[#D9D4CC] bg-transparent text-[#111111] hover:border-[#111111] hover:text-[#111111] rounded-[2px]",
        secondary:
          "bg-[#FAF8F5] text-[#111111] border border-[#D9D4CC] hover:bg-[#ECE8E1] rounded-[2px]",
        ghost:
          "hover:bg-[#FAF8F5] text-[#111111] rounded-[2px]",
        link:
          "text-[#111111] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
