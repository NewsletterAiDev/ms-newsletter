export type PrepareNewsletterPromptUsecase = (params: PrepareNewsletterPromptUsecase.Params) => Promise<PrepareNewsletterPromptUsecase.Response>

export namespace PrepareNewsletterPromptUsecase {
  export type Params = {
    news: string
    theme: string
    title: string
  }

  export type Response = string
}
