import { HashRepository } from '../../../infra/repositories'

export class HashRepositoryFactory {
  private static instance: HashRepositoryFactory

  public static getInstance(): HashRepositoryFactory {
    if (!this.instance) {
      this.instance = new HashRepositoryFactory()
    }

    return this.instance
  }

  public make(): HashRepository {
    return new HashRepository()
  }
}
