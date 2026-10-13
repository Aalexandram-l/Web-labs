import HttpClient from './HttpClient'
import { decodeOrThrow } from './decode'
import { PrizesResponseCodec, type PrizesResponse } from './codecs'
import {
  NOBEL_API_BASE_URL,
  ENDPOINTS,
  DEFAULT_PAGE_SIZE,
  CATEGORY_TRANSLATIONS
} from './config'

export interface RawPrize {
  category: string
  date: string
  grant: string
}

class NobelPrizesService {
  private http: HttpClient

  constructor() {
    this.http = new HttpClient(NOBEL_API_BASE_URL)
  }

  async getPrizes(
    { limit = DEFAULT_PAGE_SIZE, offset = 0, sort = 'desc' } = {}
  ): Promise<RawPrize[]> {
    const raw = await this.http.get<unknown>(ENDPOINTS.prizes, {
      limit,
      offset,
      sort,
      format: 'json'
    })

    const data: PrizesResponse = decodeOrThrow(
      PrizesResponseCodec,
      raw,
      'премий'
    )

    return this._mapPrizes(data.nobelPrizes)
  }

  private _mapPrizes(prizes: PrizesResponse['nobelPrizes']): RawPrize[] {
    return prizes.map((prize) => ({
      category: this._translateCategory(prize.category?.en) || '—',
      date: prize.dateAwarded || prize.awardYear || '—',
      grant: prize.prizeAmount
        ? (prize.prizeAmount / 1000000).toFixed(1)
        : '—'
    }))
  }

  private _translateCategory(category?: string): string {
    if (!category) return '—'
    return CATEGORY_TRANSLATIONS[category] || category
  }
}

export default NobelPrizesService