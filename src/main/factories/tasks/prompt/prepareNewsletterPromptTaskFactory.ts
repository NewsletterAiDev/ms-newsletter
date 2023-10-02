import { PrepareNewsletterPromptTask } from '@/application/tasks'

export class PrepareNewsletterPromptTaskFactory {
  private static instance: PrepareNewsletterPromptTaskFactory

  public static getInstance(): PrepareNewsletterPromptTaskFactory {
    if (!this.instance) {
      this.instance = new PrepareNewsletterPromptTaskFactory()
    }

    return this.instance
  }

  public make(): PrepareNewsletterPromptTask {
    return new PrepareNewsletterPromptTask()
  }
}
