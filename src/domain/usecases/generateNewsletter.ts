import { Newsletter } from '../entities'

export interface GenerateNewsletterUsecase {
  perform(params: GenerateNewsletterUsecase.Params): Promise<GenerateNewsletterUsecase.Response>
}

export namespace GenerateNewsletterUsecase {
  export type Params = {
    title: string
    theme: string
    days: number
  }

  export type Response = Newsletter | Error
}
