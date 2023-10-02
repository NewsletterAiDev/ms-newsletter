import { Newsletter, Language } from '@/domain/entities'

export interface GenerateNewsletterUsecase {
  perform(params: GenerateNewsletterUsecase.Params): Promise<GenerateNewsletterUsecase.Response>
}

export namespace GenerateNewsletterUsecase {
  export type Params = {
    userUid: string
    author: string
    greet: string
    theme: string
    tone: string
    businessType: string
    title: string
    days?: number
    bodyExample?: string
    websites: string[]
    language?: Language
  }

  export type Response = Newsletter | Error
}
