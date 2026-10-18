export const NOBEL_API_BASE_URL = 'https://api.nobelprize.org/2.1'

export const ENDPOINTS = {
  prizes: '/nobelPrizes',
  laureates: '/laureates'
} as const

export const DEFAULT_PAGE_SIZE = 25

export const HTTP_TIMEOUT = 10000

export const ERROR_MESSAGES = {
  network: 'Не удалось загрузить данные. Проверьте интернет.',
  validation: 'Данные из API не соответствуют ожидаемому формату.',
  unknown: 'Произошла неизвестная ошибка.'
} as const