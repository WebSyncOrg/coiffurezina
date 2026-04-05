type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[]
  | Record<string, boolean | null | undefined>

function collectClasses(value: ClassValue): string[] {
  if (!value) {
    return []
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectClasses)
  }

  if (typeof value === 'object') {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .flatMap(([key]) => key.split(' '))
      .filter(Boolean)
  }

  return String(value)
    .split(' ')
    .filter(Boolean)
}

export function cn(...inputs: ClassValue[]) {
  return inputs.flatMap(collectClasses).join(' ')
}
