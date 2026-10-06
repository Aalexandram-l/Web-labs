import HttpClient from './HttpClient'

class NobelLaureatsService {
  constructor() {
    this.http = new HttpClient('https://api.nobelprize.org/2.1')
  }

  async getLaureats({ limit = 25, offset = 0 } = {}) {
    const data = await this.http.get('/laureates', {
      limit,
      offset,
      format: 'json'
    })
    return this._mapLaureats(data.laureates || [])
  }

  _mapLaureats(laureats) {
    return laureats.map((l) => ({
      name: l.knownName?.en || l.orgName?.en || '—',
      birth: l.birth?.date || l.founded?.date || '—',
      prizes: l.nobelPrizes?.length || 0
    }))
  }
}

export default NobelLaureatsService