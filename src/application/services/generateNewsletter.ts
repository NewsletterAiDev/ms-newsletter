import { 
  AiApiContract, 
  SearchApiContract, 
  NewsletterRepositoryContract, 
  HashRepositoryContract 
} from '../contracts'
import {
  PrepareNewsSummaryPromptUsecase,
  PrepareNewsletterPromptUsecase,
  PreparePrioritizeNewsPromptUsecase,
} from '../../domain/usecases/tasks'
import { GenerateNewsletterUsecase } from '../../domain/usecases'

export class GenerateNewsletterService implements GenerateNewsletterUsecase {
  constructor(
    private readonly aiApiRepository: AiApiContract,
    private readonly searchApiRepository: SearchApiContract,
    private readonly newsletterRepository: NewsletterRepositoryContract,
    private readonly hashRepository: HashRepositoryContract,
    private readonly preprarePromptNewsSummaryService: PrepareNewsSummaryPromptUsecase,
    private readonly preprarePromptPrioritizeNewsService: PreparePrioritizeNewsPromptUsecase,
    private readonly preprarePromptNewsletterService: PrepareNewsletterPromptUsecase
  ) { }

  async perform(params: GenerateNewsletterUsecase.Params): Promise<GenerateNewsletterUsecase.Response> {
    const { theme, days = 30 } = params

    const news = await this.searchApiRepository.fetch({ query: theme, days })

    const summaryPrompt = await this.preprarePromptNewsSummaryService.prepare({ news })
    const summarizedNews = await this.aiApiRepository.inputPrompt({ prompt: summaryPrompt })

    const prioritizePrompt = await this.preprarePromptPrioritizeNewsService.prepare({ news: summarizedNews })
    const prioritizedNews = await this.aiApiRepository.inputPrompt({ prompt: prioritizePrompt })

    const newsletterPrompt = await this.preprarePromptNewsletterService.prepare({
      news: prioritizedNews,
      ...params,
    })
    const newsletterText = await this.aiApiRepository.inputPrompt({ prompt: newsletterPrompt })
    const newsletterUid = await this.hashRepository.generateRandomKey({ length: 10 })

    const newsletter = await this.newsletterRepository.saveNewsletter({
      uid: newsletterUid,
      text: newsletterText,
      ...params
    })

    return newsletter
  }
}
