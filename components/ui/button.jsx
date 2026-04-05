import * as React from "react"

import { cn } from "@/lib/utils"

const buttonBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const buttonVariantClasses = {
  default: "",
  destructive: "",
  outline: "",
  secondary: "",
  ghost: "",
  link: "underline-offset-4 hover:underline",
}

const buttonSizeClasses = {
  default: "",
  sm: "",
  lg: "",
  icon: "h-10 w-10",
}

function buttonVariants({ variant = "default", size = "default", className } = {}) {
  return cn(
    buttonBase,
    buttonVariantClasses[variant] ?? buttonVariantClasses.default,
    buttonSizeClasses[size] ?? buttonSizeClasses.default,
    className
  )
}

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, children, type, ...props }, ref) => {
    const classes = buttonVariants({ variant, size, className })

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        className: cn(children.props.className, classes),
      })
    }

    return (
      <button ref={ref} type={type ?? "button"} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
