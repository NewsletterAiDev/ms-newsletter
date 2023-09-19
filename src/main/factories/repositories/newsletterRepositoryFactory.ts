import { NewsletterRepository } from '../../../infra/repositories'
import { FirebaseRepositoryFactory } from './firebaseRepositoryFactory'

export class NewsletterRepositoryFactory {
  private static instance: NewsletterRepositoryFactory

  public static getInstance(): NewsletterRepositoryFactory {
    if (!this.instance) {
      this.instance = new NewsletterRepositoryFactory()
    }

    return this.instance
  }

  public make(): NewsletterRepository {
    return new NewsletterRepository(
      FirebaseRepositoryFactory.getInstance().make().db,
    )
  }
}
