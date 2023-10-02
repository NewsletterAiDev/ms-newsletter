import { Newsletter } from '@/domain/entities'

export interface ListNewsletterUsecase {
  perform(params: ListNewsletterUsecase.Params): Promise<ListNewsletterUsecase.Response>
}

export namespace ListNewsletterUsecase {
  export type Params = {
    userUid: string
  }

  export type Response = Newsletter[] | Error
}
