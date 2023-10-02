import { ListNewsletterServiceFactory } from '@/main/factories/services'
import { ListNewsletterValidatorFactory } from '@/main/factories/validators'
import { VerifyAccessTokenTaskFactory } from '@/main/factories/tasks'
import { Newsletter } from '@/domain/entities'
import { HttpResponse, badRequest, invalidParams, success, unathorized } from '@/presentation/helpers'
import { InvalidParamError } from '@/domain/errors'

type Request = {
  accessToken: string
}

export async function listNewsletterController(request: Request): Promise<HttpResponse<Newsletter[] | Error>> {
  const isValid = await ListNewsletterValidatorFactory.getInstance().make().validate(request)
  if (isValid instanceof Error) return invalidParams(isValid)

  const userInfo = await VerifyAccessTokenTaskFactory.getInstance().make().perform(request)
  if (userInfo instanceof InvalidParamError) return unathorized(userInfo)

  const newsletter = await ListNewsletterServiceFactory.getInstance().make().perform({
    userUid: userInfo.uid
  })

  return (newsletter instanceof Error) ?
    badRequest(newsletter) :
    success(newsletter)
}
