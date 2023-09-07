export interface PrepareNewsletterPromptUsecase {
  prepare(params: PrepareNewsletterPromptUsecase.Params): Promise<PrepareNewsletterPromptUsecase.Response>
}

export namespace PrepareNewsletterPromptUsecase {
  export type Params = {
    news: string
    theme: string
    greet: string
    author: string
    title: string
    tone: string
    businessType: string
    bodyExample?: string
  }

  export type Response = string
}
