import { AiApiRepository } from '../../../infra/repositories'
import { variables } from '../../config'

export class AiApiRepositoryFactory {
  private static instance: AiApiRepositoryFactory

  public static getInstance(): AiApiRepositoryFactory {
    if (!this.instance) {
      this.instance = new AiApiRepositoryFactory()
    }

    return this.instance
  }

  public make(): AiApiRepository {
    return new AiApiRepository(
      variables.openAIApiKey,
      variables.aiModel,
      +variables.aiTemperature,
      +variables.aiFrequencyPenalty,
      +variables.aiPresencePenalty,
    )
  }
}
