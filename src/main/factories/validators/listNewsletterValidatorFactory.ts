import {
  ValidatorsInterface,
  ValidationComposite,
  RequireParamValidation,
} from '@/infra/validators'

const requiredFields: string[] = [
  'accessToken'
]

export class ListNewsletterValidatorFactory {
  private static instance: ListNewsletterValidatorFactory

  public static getInstance(): ListNewsletterValidatorFactory {
    if (!this.instance) {
      this.instance = new ListNewsletterValidatorFactory()
    }

    return this.instance
  }

  public make(): ValidationComposite {
    const validations: ValidatorsInterface[] = []
    for (const field of requiredFields) {
      validations.push(new RequireParamValidation(field))
    }

    return new ValidationComposite(validations)
  }
}
