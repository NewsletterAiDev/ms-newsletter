import { variables } from '@/main/config'
import { SearchApiRepository } from '@/infra/repositories'

export class SearchApiRepositoryFactory {
  private static instance: SearchApiRepositoryFactory

  public static getInstance(): SearchApiRepositoryFactory {
    if (!this.instance) {
      this.instance = new SearchApiRepositoryFactory()
    }

    return this.instance
  }

  public make(): SearchApiRepository {
    return new SearchApiRepository(
      variables.serpApiKey
    )
  }
}
