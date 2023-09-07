import {
  PrepareNewsSummaryPromptUsecase,
  PrepareNewsletterPromptUsecase,
  PreparePrioritizeNewsPromptUsecase,
} from '../../domain/usecases/tasks'
import { AiApiContract, SearchApiContract } from '../contracts'
import { GenerateNewsletterUsecase } from '../../domain/usecases'

export class GenerateNewsletterService implements GenerateNewsletterUsecase {
  constructor(
    private readonly aiApiRepository: AiApiContract,
    private readonly searchApiRepository: SearchApiContract,
    private readonly preprarePromptsService: {
      newsSummary: PrepareNewsSummaryPromptUsecase
      prioritizeNews: PreparePrioritizeNewsPromptUsecase
      newsletter: PrepareNewsletterPromptUsecase
    }
  ) { }

  async perform(params: GenerateNewsletterUsecase.Params): Promise<GenerateNewsletterUsecase.Response> {
    const { theme, days = 30 } = params

    const news = await this.searchApiRepository.fetch({ query: theme, days })
    if (news instanceof Error) return news

    const summaryPrompt = await this.preprarePromptsService.newsSummary.prepare({ news })
    const summarizedNews = await this.aiApiRepository.inputPrompt(summaryPrompt)
    if (summarizedNews instanceof Error) return summarizedNews

    const prioritizePrompt = await this.preprarePromptsService.prioritizeNews.prepare({ news: summarizedNews })
    const prioritizedNews = await this.aiApiRepository.inputPrompt(prioritizePrompt)
    if (prioritizedNews instanceof Error) return prioritizedNews

    const newsletterPrompt = await this.preprarePromptsService.newsletter.prepare({
      news: prioritizedNews,
      ...params,
    })
    const newsletter = await this.aiApiRepository.inputPrompt(newsletterPrompt)

    return newsletter
  }
}
