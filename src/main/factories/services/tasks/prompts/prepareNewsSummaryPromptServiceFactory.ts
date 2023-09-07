import { PrepareNewsSummaryPromptService } from '../../../../../application/services'

export class PrepareNewsSummaryPromptServiceFactory {
  private static instance: PrepareNewsSummaryPromptServiceFactory

  public static getInstance(): PrepareNewsSummaryPromptServiceFactory {
    if (!this.instance) {
      this.instance = new PrepareNewsSummaryPromptServiceFactory()
    }

    return this.instance
  }

  public make(): PrepareNewsSummaryPromptService {
    return new PrepareNewsSummaryPromptService()
  }
}
