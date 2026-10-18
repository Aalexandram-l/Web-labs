import ApiClientFactory from './ApiClientFactory'
import { decodeOrThrow } from './decode'
import { PrizesResponseCodec, type PrizesResponse } from './codecs'
import {
  ENDPOINTS,
  DEFAULT_PAGE_SIZE
} from './config'

export interface RawPrize {
  category: string
  date: string
  grant: string
}

class NobelPrizesService {
  private http = ApiClientFactory.getNobelClient()

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
      category: prize.category?.en || '—',
      date: prize.dateAwarded || prize.awardYear || '—',
      grant: prize.prizeAmount
        ? (prize.prizeAmount / 1000000).toFixed(1)
        : '—'
    }))
  }
}

export default NobelPrizesService