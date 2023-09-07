import { PreparePrioritizeNewsPromptService } from '../../../../../application/services'

export class PreparePrioritizeNewsPromptServiceFactory {
  private static instance: PreparePrioritizeNewsPromptServiceFactory

  public static getInstance(): PreparePrioritizeNewsPromptServiceFactory {
    if (!this.instance) {
      this.instance = new PreparePrioritizeNewsPromptServiceFactory()
    }

    return this.instance
  }

  public make(): PreparePrioritizeNewsPromptService {
    return new PreparePrioritizeNewsPromptService()
  }
}
