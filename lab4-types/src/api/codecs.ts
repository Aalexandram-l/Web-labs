import * as t from 'io-ts'

export const LaureateCodec = t.type({
  id: t.string,
  knownName: t.union([t.type({ en: t.string }), t.undefined]),
  orgName: t.union([t.type({ en: t.string }), t.undefined]),
  birth: t.union([t.type({ date: t.string }), t.undefined]),
  founded: t.union([t.type({ date: t.string }), t.undefined]),
  nobelPrizes: t.array(
    t.type({
      awardYear: t.string,
      category: t.type({ en: t.string })
    })
  )
})

export type Laureate = t.TypeOf<typeof LaureateCodec>

export const LaureatesResponseCodec = t.type({
  laureates: t.array(LaureateCodec)
})

export type LaureatesResponse = t.TypeOf<typeof LaureatesResponseCodec>

export const PrizeCodec = t.type({
  awardYear: t.string,
  category: t.type({ en: t.string }),
  prizeAmount: t.number,
  dateAwarded: t.union([t.string, t.undefined])
})

export type Prize = t.TypeOf<typeof PrizeCodec>

export const PrizesResponseCodec = t.type({
  nobelPrizes: t.array(PrizeCodec)
})

export type PrizesResponse = t.TypeOf<typeof PrizesResponseCodec>