import { SearchApiRepository } from '../../../infra/repositories'
import { variables } from '../../config'

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
      variables.googleSearchApiKey,
      variables.googleSearchCx
    )
  }
}
