import { PrepareNewsletterPromptService } from '../../../../../application/services'

export class PrepareNewsletterPromptServiceFactory {
  private static instance: PrepareNewsletterPromptServiceFactory

  public static getInstance(): PrepareNewsletterPromptServiceFactory {
    if (!this.instance) {
      this.instance = new PrepareNewsletterPromptServiceFactory()
    }

    return this.instance
  }

  public make(): PrepareNewsletterPromptService {
    return new PrepareNewsletterPromptService()
  }
}
