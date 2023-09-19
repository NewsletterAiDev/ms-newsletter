import { Newsletter } from '../../domain/entities'
import {
  GenerateNewsletterValidatorFactory,
  GenerateNewsletterServiceFactory,
} from '../../main/factories'
import { HttpResponse, badRequest, invalidParams, success } from '../helpers'

type Request = {
  author: string
  userUid: string
  greet: string
  theme: string
  days?: number
  tone: string
  businessType: string
  title: string
  bodyExample?: string
}

export async function generateNewsletterController(request: Request): Promise<HttpResponse<Newsletter | Error>> {
  const isValid = await GenerateNewsletterValidatorFactory.getInstance().make().validate(request)
  if (isValid instanceof Error) return invalidParams(isValid)

  const newsletter = await GenerateNewsletterServiceFactory.getInstance().make().perform(request)

  return (newsletter instanceof Error) ?
    badRequest(newsletter) :
    success(newsletter)
}
