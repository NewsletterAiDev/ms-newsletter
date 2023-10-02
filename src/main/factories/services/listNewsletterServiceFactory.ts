import { NewsletterRepositoryFactory } from '@/main/factories/repositories'
import { ListNewsletterService } from '@/application/services'

export class ListNewsletterServiceFactory {
  private static instance: ListNewsletterServiceFactory

  public static getInstance(): ListNewsletterServiceFactory {
    if (!this.instance) {
      this.instance = new ListNewsletterServiceFactory()
    }

    return this.instance
  }

  public make(): ListNewsletterService {
    return new ListNewsletterService(
      NewsletterRepositoryFactory.getInstance().make()
    )
  }
}
