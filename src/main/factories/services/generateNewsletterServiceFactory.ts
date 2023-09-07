import {
  PrepareNewsSummaryPromptServiceFactory,
  PrepareNewsletterPromptServiceFactory,
  PreparePrioritizeNewsPromptServiceFactory,
} from './tasks'
import { GenerateNewsletterService } from '../../../application/services'
import { AiApiRepositoryFactory, SearchApiRepositoryFactory } from '../repositories'

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
      {
        newsSummary: PrepareNewsSummaryPromptServiceFactory.getInstance().make(),
        newsletter: PrepareNewsletterPromptServiceFactory.getInstance().make(),
        prioritizeNews: PreparePrioritizeNewsPromptServiceFactory.getInstance().make(),
      }
    )
  }
}
