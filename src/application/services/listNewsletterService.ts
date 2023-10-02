import { NewsletterRepositoryContract } from '@/application/contracts/repositories'
import { CouldNotError } from '@/domain/errors'
import { ListNewsletterUsecase } from '@/domain/usecases'

export class ListNewsletterService implements ListNewsletterUsecase {
  constructor(
    private readonly newsletterRepository: NewsletterRepositoryContract
  ) { }

  async perform(params: ListNewsletterUsecase.Params): Promise<ListNewsletterUsecase.Response> {
    const newsletter = await this.newsletterRepository.listNewsletterByUserUid(params)
    if (!newsletter) throw new CouldNotError('Newsletter not found')

    return newsletter
  }
}
