import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium select-none disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg hover:opacity-90",
        ghost:
          "bg-transparent text-fg border border-border hover:bg-bg-subtle",
        quiet: "bg-bg-subtle text-fg hover:bg-bg-elevated",
        danger: "bg-signal-neg/15 text-signal-neg border border-signal-neg/30",
      },
      size: {
        default: "h-11 px-5 text-sm rounded-sm",
        sm: "h-9 px-3 text-xs rounded-xs",
        lg: "h-12 px-6 text-sm rounded-md",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: Props) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
