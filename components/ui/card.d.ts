import type { ComponentPropsWithoutRef, ReactElement, ReactNode, RefAttributes } from 'react'

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}

export declare const Card: (
  props: CardProps & RefAttributes<HTMLDivElement>
) => ReactElement | null

export declare const CardHeader: (
  props: CardProps & RefAttributes<HTMLDivElement>
) => ReactElement | null

export declare const CardTitle: (
  props: CardProps & RefAttributes<HTMLDivElement>
) => ReactElement | null

export declare const CardDescription: (
  props: CardProps & RefAttributes<HTMLDivElement>
) => ReactElement | null

export declare const CardContent: (
  props: CardProps & RefAttributes<HTMLDivElement>
) => ReactElement | null

export declare const CardFooter: (
  props: CardProps & RefAttributes<HTMLDivElement>
) => ReactElement | null
