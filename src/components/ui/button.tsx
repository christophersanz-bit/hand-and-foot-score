import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,box-shadow,color] duration-quick ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/80 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg shadow-sm hover:opacity-90",
        cream: "bg-paper text-paper-fg hover:bg-paper-deep",
        secondary:
          "bg-felt-elev text-felt-fg shadow-felt hover:bg-felt-line/40",
        outline:
          "border border-felt-line bg-transparent text-felt-fg hover:bg-felt-elev",
        ghost: "text-felt-fg hover:bg-felt-elev",
        paperGhost: "text-paper-fg hover:bg-paper-inset",
        destructive: "bg-destructive text-destructive-fg hover:opacity-90",
      },
      size: {
        default: "h-11 px-4",
        sm: "h-9 rounded-sm px-3 text-xs",
        lg: "h-12 rounded-lg px-5 text-base",
        icon: "size-11",
        iconSm: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
