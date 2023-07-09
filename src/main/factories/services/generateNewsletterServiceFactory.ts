import { AiApiRepositoryFactory, SearchApiRepositoryFactory } from '../repositories'
import { GenerateNewsletterService, preparePromptsService } from '../../../application/services'

export class GenerateNewsletterServiceFactory {
  private static instance: GenerateNewsletterServiceFactory

  public static getInstance(): GenerateNewsletterServiceFactory {
    if (!this.instance) {
      this.instance = new GenerateNewsletterServiceFactory()
    }

    return this.instance
  }

  public make(): GenerateNewsletterService {
    return new GenerateNewsletterService(
      AiApiRepositoryFactory.getInstance().make(),
      SearchApiRepositoryFactory.getInstance().make(),
      preparePromptsService
    )
  }
}
