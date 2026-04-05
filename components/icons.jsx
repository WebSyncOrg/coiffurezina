import { cn } from '@/lib/utils'

function BaseIcon({ className, children, ...props }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-5 w-5 shrink-0', className)}
      {...props}
    >
      {children}
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </BaseIcon>
  )
}

export function CloseIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </BaseIcon>
  )
}

export function PhoneIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M6.6 4.8c.7-.7 1.8-.7 2.4 0l1.7 1.7c.6.6.7 1.7.1 2.3l-1.1 1.1c-.2.2-.3.6-.2.9.5 1 1.2 2 2 2.8s1.8 1.5 2.8 2c.3.1.7 0 .9-.2l1.1-1.1c.6-.6 1.7-.5 2.3.1l1.7 1.7c.7.7.7 1.8 0 2.4l-1.2 1.2c-.8.8-1.8 1.2-2.9 1.2-2.8 0-6.2-1.7-9.1-4.6S3 11.6 3 8.8c0-1.1.4-2.1 1.2-2.9l1.2-1.1Z" />
    </BaseIcon>
  )
}

export function MapPinIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-4.6 6-10a6 6 0 1 0-12 0c0 5.4 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" fill="currentColor" stroke="none" />
    </BaseIcon>
  )
}

export function MessageCircleIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M20.5 11.5A8.5 8.5 0 1 1 12 3a8.4 8.4 0 0 1 4.8 1.5L21 4l-.5 4.2a8.5 8.5 0 0 1 0 3.3Z" />
      <path d="M8.5 12.5h7" />
      <path d="M8.5 9.5h4.5" />
    </BaseIcon>
  )
}

export function WhatsAppIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M20.6 11.4a8.6 8.6 0 0 1-12.7 7.5L4 20l1.1-4.3a8.6 8.6 0 1 1 15.5-4.3Z" />
      <path d="M9.1 8.8c.3-.5.7-.6 1.1-.4l1.4.7c.3.1.5.5.3.9l-.6.9c-.1.2-.1.4 0 .6.7 1.3 1.7 2.4 3 3 .2.1.4.1.6 0l.9-.6c.4-.2.8 0 .9.3l.7 1.4c.2.4.1.8-.4 1.1-1 .6-2.3.5-3.8-.1-1.8-.8-3.7-2.7-4.5-4.5-.6-1.5-.7-2.8-.2-3.9Z" />
    </BaseIcon>
  )
}

export function CalendarIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 9h16" />
      <path d="M8 13h4" />
    </BaseIcon>
  )
}

export function InstagramIcon(props) {
  return (
    <BaseIcon {...props}>
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.2" cy="7.8" r="0.8" fill="currentColor" stroke="none" />
    </BaseIcon>
  )
}

export function FacebookIcon(props) {
  return (
    <BaseIcon {...props}>
      <path d="M14.2 8.2h1.8V5.7h-1.8c-2.4 0-4.2 1.8-4.2 4.2V12H8v2.6h2V19h2.7v-4.4h2.2L15.3 12h-2.6v-1.9c0-.9.6-1.9 1.5-1.9Z" />
    </BaseIcon>
  )
}
