import {
  PrepareNewsSummaryPromptTaskFactory,
  PrepareNewsletterPromptTaskFactory,
  PreparePrioritizeNewsPromptTaskFactory,
} from '@/main/factories/tasks'
import { CryptoAdapterFactory } from '@/main/factories/adapters'
import { GenerateNewsletterService } from '@/application/services'
import { AiApiRepositoryFactory, NewsletterRepositoryFactory, SearchApiRepositoryFactory } from '@/main/factories/repositories'

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
      CryptoAdapterFactory.getInstance().make(),
      PrepareNewsSummaryPromptTaskFactory.getInstance().make(),
      PrepareNewsletterPromptTaskFactory.getInstance().make(),
      PreparePrioritizeNewsPromptTaskFactory.getInstance().make(),
    )
  }
}
