import { ErrorMap } from '../../../domain/entities'
import { UnknownError } from '../../../presentation/errors'
import { HandleErrorUsecase } from '../../../domain/usecases'

import { logger } from 'firebase-functions'

export async function handleErrorService({ err }: HandleErrorUsecase.Params): Promise<HandleErrorUsecase.Response> {
    const error = ErrorMap.get(err)

    if (error) return error

    console.log(err)
    logger.error(error)
    return new UnknownError()
}
