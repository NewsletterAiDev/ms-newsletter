import {
  PrepareNewsSummaryPromptServiceFactory,
  PrepareNewsletterPromptServiceFactory,
  PreparePrioritizeNewsPromptServiceFactory,
} from './tasks'
import { GenerateNewsletterService } from '../../../application/services'
import { AiApiRepositoryFactory, HashRepositoryFactory, NewsletterRepositoryFactory, SearchApiRepositoryFactory } from '../repositories'

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
      NewsletterRepositoryFactory.getInstance().make(), 
      HashRepositoryFactory.getInstance().make(),
      PrepareNewsSummaryPromptServiceFactory.getInstance().make(),
      PrepareNewsletterPromptServiceFactory.getInstance().make(),
      PreparePrioritizeNewsPromptServiceFactory.getInstance().make(),
    )
  }
}
