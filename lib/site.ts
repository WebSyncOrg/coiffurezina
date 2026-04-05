export const SITE_NAME = 'Coiffure Zina'

export const PHONE_DISPLAY = '514 322 8982'
export const PHONE_E164 = '+15143228982'

export const WHATSAPP_DISPLAY = '514 825 0260'
export const WHATSAPP_DIGITS = '5148250260'

export const ADDRESS = '6000 Boul Henri-Bourassa E, Montréal-Nord, QC H1G 2T6'

export const MAPS_URL =
  'https://www.google.com/maps/place/6000+Boul+Henri-Bourassa+E,+Montr%C3%A9al-Nord,+QC+H1G+2T6/@45.6057362,-73.6177417,3a,90y,44.38h,82.78t/data=!3m7!1e1!3m5!1s6Hf9ddzt3rYE38H-s3sdwQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.224382207578245%26panoid%3D6Hf9ddzt3rYE38H-s3sdwQ%26yaw%3D44.375041186161454!7i16384!8i8192!4m7!3m6!1s0x4cc91fa438f2e3e9:0xad20452eb0ddbfeb!8m2!3d45.6061042!4d-73.616806!10e5!16s%2Fg%2F11c3q36ct_!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D'

export const MAPS_EMBED_URL = 'https://www.google.com/maps?q=45.6061042,-73.616806&z=19&output=embed'

export function telHref() {
  return `tel:${PHONE_E164}`
}

export function whatsappHref(message?: string) {
  const params = new URLSearchParams()

  if (message) {
    params.set('text', message)
  }

  const query = params.toString()

  return `https://wa.me/${WHATSAPP_DIGITS}${query ? `?${query}` : ''}`
}

export function formatDateLabel(dateValue: string) {
  if (!dateValue) {
    return ''
  }

  const date = new Date(`${dateValue}T12:00:00`)

  return new Intl.DateTimeFormat('fr-CA', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function formatTimeLabel(timeValue: string) {
  if (!timeValue) {
    return ''
  }

  const [hours, minutes] = timeValue.split(':')
  const hourLabel = String(Number(hours))

  return `${hourLabel} h ${minutes}`
}

export interface AppointmentDetails {
  name: string
  phone: string
  service: string
  dateLabel: string
  timeLabel: string
  notes?: string
}

export function buildAppointmentMessage(details: AppointmentDetails) {
  const lines = [
    `Bonjour ${SITE_NAME},`,
    '',
    'Je souhaite prendre rendez-vous.',
    '',
    `Nom: ${details.name}`,
    `Téléphone: ${details.phone}`,
    `Service: ${details.service}`,
    `Date souhaitée: ${details.dateLabel}`,
    `Heure souhaitée: ${details.timeLabel}`,
    details.notes ? `Notes: ${details.notes}` : undefined,
    '',
    'Merci !',
  ].filter(Boolean)

  return lines.join('\n')
}
