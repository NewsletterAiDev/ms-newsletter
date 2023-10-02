import {
  AiApiContract,
  SearchApiContract,
  NewsletterRepositoryContract,
} from '@/application/contracts/repositories'
import { CryptoAdapterContract } from '@/application/contracts/adapters'
import {
  PrepareNewsSummaryPromptTreaty,
  PrepareNewsletterPromptTreaty,
  PreparePrioritizeNewsPromptTreaty,
} from '@/application/tasks'
import { GenerateNewsletterUsecase } from '@/domain/usecases'

export class GenerateNewsletterService implements GenerateNewsletterUsecase {
  constructor(
    private readonly aiApiRepository: AiApiContract,
    private readonly searchApiRepository: SearchApiContract,
    private readonly newsletterRepository: NewsletterRepositoryContract,
    private readonly cryptoAdapter: CryptoAdapterContract,
    private readonly preprarePromptNewsSummaryTask: PrepareNewsSummaryPromptTreaty,
    private readonly preprarePromptPrioritizeNewsTask: PreparePrioritizeNewsPromptTreaty,
    private readonly preprarePromptNewsletterTask: PrepareNewsletterPromptTreaty
  ) { }

  async perform(params: GenerateNewsletterUsecase.Params): Promise<GenerateNewsletterUsecase.Response> {
    const { theme, days = 30, language = 'pt-br', websites } = params

    const news = await this.searchApiRepository.fetch({ query: theme, days, language, websites })

    const summaryPrompt = await this.preprarePromptNewsSummaryTask.prepare({ news })
    const summarizedNews = await this.aiApiRepository.inputPrompt({ prompt: summaryPrompt })

    const prioritizePrompt = await this.preprarePromptPrioritizeNewsTask.prepare({ news: summarizedNews })
    const prioritizedNews = await this.aiApiRepository.inputPrompt({ prompt: prioritizePrompt })

    const newsletterPrompt = await this.preprarePromptNewsletterTask.prepare({
      news: prioritizedNews,
      language,
      ...params,
    })
    const newsletterText = await this.aiApiRepository.inputPrompt({ prompt: newsletterPrompt })
    const newsletterUid = await this.cryptoAdapter.generateUuid()

    console.log(newsletterText)

    const newsletter = await this.newsletterRepository.saveNewsletter({
      uid: newsletterUid,
      text: newsletterText,
      ...params,
    })

    return newsletter
  }
}
