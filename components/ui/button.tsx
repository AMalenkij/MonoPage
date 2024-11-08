import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        arrow: "no-underline disabled:cursor-not-allowed bg-white text-black active:bg-gray-300 rounded-full group/arrow overflow-hidden transition border border-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  arrow?: boolean
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, arrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    if (arrow) {
      return (
        <Comp
          className={cn(buttonVariants({ variant: "arrow", size, className }))}
          ref={ref}
          {...props}
        >
          <span className="pl-6 pr-16 py-3 relative inline-flex items-center">
            <span className="group-hover/arrow:-translate-x-1/3 group-hover/arrow:opacity-0 transition-all duration-200">
              {children}
            </span>
            <div className="flex items-center justify-end absolute inset-x-6">
              <div className="group-hover/arrow:before:translate-x-0 absolute left-0 right-[2px] flex h-[1.5px] origin-right justify-end overflow-hidden rounded-full before:w-full before:translate-x-[calc(100%-16px)] before:rounded-full before:bg-current before:transition-transform before:duration-200" />
              <ArrowRight className="text-current" size={12} />
            </div>
          </span>
        </Comp>
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }