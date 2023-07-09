import {
  ValidatorsInterface,
  ValidationComposite,
  RequireParamValidation,
} from '../../../infra/validators'

export class GenerateNewsletterValidatorFactory {
  private static instance: GenerateNewsletterValidatorFactory

  public static getInstance(): GenerateNewsletterValidatorFactory {
    if (!this.instance) {
      this.instance = new GenerateNewsletterValidatorFactory()
    }

    return this.instance
  }

  public make(): ValidationComposite {
    const validations: ValidatorsInterface[] = []
    for (const field of ['author', 'greet', 'theme']) {
      validations.push(new RequireParamValidation(field))
    }

    return new ValidationComposite(validations)
  }
}
