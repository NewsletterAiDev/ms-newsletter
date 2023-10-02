import { PreparePrioritizeNewsPromptTask } from '@/application/tasks'

export class PreparePrioritizeNewsPromptTaskFactory {
  private static instance: PreparePrioritizeNewsPromptTaskFactory

  public static getInstance(): PreparePrioritizeNewsPromptTaskFactory {
    if (!this.instance) {
      this.instance = new PreparePrioritizeNewsPromptTaskFactory()
    }

    return this.instance
  }

  public make(): PreparePrioritizeNewsPromptTask {
    return new PreparePrioritizeNewsPromptTask()
  }
}
