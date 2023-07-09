import { AiApiContract, SearchApiContract } from '../contracts'
import { GenerateNewsletterUsecase } from '../../domain/usecases'
import { PreprarePromptsUsecase } from '../../domain/usecases/tasks'

export class GenerateNewsletterService implements GenerateNewsletterUsecase {
  constructor(
    private readonly aiApiRepository: AiApiContract,
    private readonly searchApiRepository: SearchApiContract,
    private readonly preprarePromptsService: PreprarePromptsUsecase

  ) { }

  async perform({ greet, author, theme, days = 30 }: GenerateNewsletterUsecase.Params): Promise<GenerateNewsletterUsecase.Response> {
    const news = await this.searchApiRepository.fetch({ query: theme, days })
    if (news instanceof Error) return news

    const summaryPrompt = await this.preprarePromptsService.newsSummary({ news })
    const summarizedNews = await this.aiApiRepository.fetch(summaryPrompt)
    if (summarizedNews instanceof Error) return summarizedNews

    const prioritizePrompt = await this.preprarePromptsService.prioritizeNews({ news: summarizedNews })
    const prioritizedNews = await this.aiApiRepository.fetch(prioritizePrompt)
    if (prioritizedNews instanceof Error) return prioritizedNews

    const newsletterPrompt = await this.preprarePromptsService.newsletter({ news: prioritizedNews, theme, greet, author })
    const newsletter = await this.aiApiRepository.fetch(newsletterPrompt)

    return newsletter
  }
}
