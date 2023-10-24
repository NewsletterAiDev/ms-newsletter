import { Language, Newsletter } from '@/domain/entities'

export interface NewsletterRepositoryContract {
  saveNewsletter(params: NewsletterRepositoryContract.SaveNewsletter.Params): Promise<NewsletterRepositoryContract.SaveNewsletter.Response>
  listNewsletterByUserUid(params: NewsletterRepositoryContract.ListNewsletterByUserUid.Params): Promise<NewsletterRepositoryContract.ListNewsletterByUserUid.Response>
}

export namespace NewsletterRepositoryContract {

  export namespace SaveNewsletter {
    export type Params = {
      uid: string
      userUid: string
      text: string
      author: string
      greet: string
      theme: string
      tone: string
      businessType: string
      title: string
      days?: number
      bodyExample?: string
      websites: string[]
      language: Language
    }

    export type Response = Newsletter
  }

  export namespace ListNewsletterByUserUid {
    export type Params = {
      userUid: string
    }

    export type Response = Newsletter[] | undefined
  }
}
