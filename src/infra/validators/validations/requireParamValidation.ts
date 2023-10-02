import { InvalidParamError } from '@/domain/errors'
import { ValidatorsInterface } from '@/infra/validators/validatorsInterface'

export class RequireParamValidation implements ValidatorsInterface {
  constructor(
        private readonly paramName: string
  ) { }

  async validate(input: any): Promise<true | Error> {
    if (!input[this.paramName]) {
      return new InvalidParamError(this.paramName)
    }
    return true
  }
}
