import { toZonedTime } from 'date-fns-tz'

export const WEEK_DAYS = [
   'Domenica',
   'Lunedì',
   'Martedì',
   'Mercoledì',
   'Giovedì',
   'Venerdì',
   'Sabato',
]

export const MONTHS = [
   'Gennaio',
   'Febbraio',
   'Marzo',
   'Aprile',
   'Maggio',
   'Giugno',
   'Luglio',
   'Agosto',
   'Settembre',
   'Ottobre',
   'Novembre',
   'Dicembre',
]

export const TimeFrameCaptions = {
   DAY: 'Buongiorno',
   AFTERNOON: 'Buon pomeriggio',
   NIGHT: 'Buonasera',
}

export function getZonedDate(date = new Date()) {
   return toZonedTime(date, 'Europe/Rome')
}

export function getDayName(date = new Date()) {
   date = getZonedDate(date)
   return WEEK_DAYS[date.getDay()]
}

export function getMonthName(date = new Date()) {
   date = getZonedDate(date)
   return MONTHS[date.getMonth()]
}

export function getItalianDate(date = new Date()) {
   date = getZonedDate(date)
   return `${date.getDate()} ${getMonthName(date)} ${date.getFullYear()}`
}

export function getItalianDateWithDay(date = new Date()) {
   date = getZonedDate(date)
   return `${getDayName(date)}, ${getItalianDate(date)}`
}

export function getTimeUntilNextDay(date = new Date()) {
   date = getZonedDate(date)

   const nextDay = new Date(date)
   nextDay.setDate(nextDay.getDate() + 1)
   nextDay.setHours(0, 0, 0, 0)

   const timeUntilNextDay = nextDay.getTime() - date.getTime()

   return {
      h: Math.floor(timeUntilNextDay / (1000 * 60 * 60)),
      m: Math.floor((timeUntilNextDay % (1000 * 60 * 60)) / (1000 * 60)),
      s: Math.floor((timeUntilNextDay % (1000 * 60)) / 1000),
   }
}

export function getTimeFrameCaption(date = new Date()) {
   date = getZonedDate(date)

   return date.getHours() < 12
      ? TimeFrameCaptions.DAY
      : date.getHours() < 18
        ? TimeFrameCaptions.AFTERNOON
        : TimeFrameCaptions.NIGHT
}
