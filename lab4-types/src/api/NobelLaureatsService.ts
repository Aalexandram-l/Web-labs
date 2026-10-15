import ApiClientFactory from './ApiClientFactory'
import { decodeOrThrow } from './decode'
import {
  LaureatesResponseCodec,
  type LaureatesResponse
} from './codecs'
import { ENDPOINTS, DEFAULT_PAGE_SIZE } from './config'

export interface RawLaureate {
  name: string
  birth: string
  prizes: number
}

class NobelLaureatsService {
  private http = ApiClientFactory.getNobelClient()

  async getLaureats(
    { limit = DEFAULT_PAGE_SIZE, offset = 0 } = {}
  ): Promise<RawLaureate[]> {
    const raw = await this.http.get<unknown>(ENDPOINTS.laureates, {
      limit,
      offset,
      format: 'json'
    })

    const data: LaureatesResponse = decodeOrThrow(
      LaureatesResponseCodec,
      raw,
      'лауреатов'
    )

    return this._mapLaureats(data.laureates)
  }

  private _mapLaureats(
    laureates: LaureatesResponse['laureates']
  ): RawLaureate[] {
    return laureates.map((l) => ({
      name: l.knownName?.en || l.orgName?.en || '—',
      birth: l.birth?.date || l.founded?.date || '—',
      prizes: l.nobelPrizes?.length || 0
    }))
  }
}

export default NobelLaureatsService