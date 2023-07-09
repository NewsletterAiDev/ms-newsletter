import {
  GenerateNewsletterValidatorFactory,
  GenerateNewsletterServiceFactory,
} from '../../main/factories'
import { handleErrorService } from '../../application/services'
import { HttpResponse, badRequest, invalidParams, success } from '../helpers'

type Request = {
  author: string
  greet: string
  theme: string
  days?: number
}

export async function generateNewsletterController(request: Request): Promise<HttpResponse<string | Error>> {
  try {
    const isValid = await GenerateNewsletterValidatorFactory.getInstance().make().validate(request)
    if (isValid instanceof Error) return invalidParams(isValid)

    const newsletter = await GenerateNewsletterServiceFactory.getInstance().make().perform(request)

    return (newsletter instanceof Error) ?
      badRequest(newsletter) :
      success(newsletter)
  } catch (err: any) {
    const error = await handleErrorService({ err: err.message })

    return badRequest(error)
  }
}
