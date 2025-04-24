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

export function getDayName(date = new Date()) {
   return WEEK_DAYS[date.getDay()]
}

export function getMonthName(date = new Date()) {
   return MONTHS[date.getMonth()]
}

export function getItalianDate(date = new Date()) {
   return `${getDayName(date)} ${date.getDate()} ${getMonthName(date)} ${date.getFullYear()}`
}
