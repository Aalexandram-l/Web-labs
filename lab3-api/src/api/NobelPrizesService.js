import HttpClient from './HttpClient'

class NobelPrizesService {
  constructor() {
    this.http = new HttpClient('https://api.nobelprize.org/2.1')
  }

  async getPrizes({ limit = 25, offset = 0, sort = 'desc' } = {}) {
    const data = await this.http.get('/nobelPrizes', {
      limit,
      offset,
      sort,
      format: 'json'
    })
    return this._mapPrizes(data.nobelPrizes || [])
  }

  _mapPrizes(prizes) {
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