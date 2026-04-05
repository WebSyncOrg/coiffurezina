import type { ComponentPropsWithoutRef, ReactElement, ReactNode, RefAttributes } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children?: ReactNode
}

export declare const Button: (
  props: ButtonProps & RefAttributes<HTMLButtonElement>
) => ReactElement | null

export declare function buttonVariants(args?: ButtonProps): string
