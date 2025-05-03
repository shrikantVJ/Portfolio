"use client"

import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 relative overflow-hidden",
        outline:
          "border border-purple-500 text-white hover:bg-purple-500/10 transition-all duration-300",
        secondary:
          "bg-black/30 text-white hover:bg-black/50 border border-purple-500/20",
        ghost: "hover:bg-purple-500/10 text-white hover:text-white",
        link: "text-purple-400 underline-offset-4 hover:underline",
        glow: "glow-button text-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    
    // Special handling for glow variant
    const isGlow = variant === "glow"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {isGlow && (
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 transition-opacity group-hover:opacity-100 blur"></span>
          </span>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }