import * as t from 'io-ts'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { PathReporter } from 'io-ts/PathReporter'

export function decodeOrThrow<A>(
  codec: t.Type<A, unknown, unknown>,
  data: unknown,
  context: string = 'данных'
): A {
  const result: E.Either<t.Errors, A> = codec.decode(data)

  return pipe(
    result,
    E.fold(
      () => {
        const messages = PathReporter.report(result)
        throw new Error(
          `Ошибка валидации ${context}:\n${messages.join('\n')}`
        )
      },
      (value) => value
    )
  )
}