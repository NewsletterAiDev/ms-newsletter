import { PrepareNewsSummaryPromptTask } from '@/application/tasks'

export class PrepareNewsSummaryPromptTaskFactory {
  private static instance: PrepareNewsSummaryPromptTaskFactory

  public static getInstance(): PrepareNewsSummaryPromptTaskFactory {
    if (!this.instance) {
      this.instance = new PrepareNewsSummaryPromptTaskFactory()
    }

    return this.instance
  }

  public make(): PrepareNewsSummaryPromptTask {
    return new PrepareNewsSummaryPromptTask()
  }
}
