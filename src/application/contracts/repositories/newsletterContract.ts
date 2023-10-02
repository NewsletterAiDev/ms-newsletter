import { Newsletter } from '@/domain/entities'

export interface NewsletterRepositoryContract {
  saveNewsletter(params: NewsletterRepositoryContract.SaveNewsletter.Params): Promise<NewsletterRepositoryContract.SaveNewsletter.Response>
}

export namespace NewsletterRepositoryContract {
  export namespace SaveNewsletter {
    export type Params = {
      uid: string
      userUid: string
      text: string
      theme: string
      tone: string
      businessType: string
      author: string
      greet: string
      title: string
    }

    export type Response = Newsletter
  }
}
