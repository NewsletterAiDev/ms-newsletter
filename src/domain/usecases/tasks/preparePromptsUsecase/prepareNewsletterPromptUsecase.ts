export type PrepareNewsletterPromptUsecase = (params: PrepareNewsletterPromptUsecase.Params) => Promise<PrepareNewsletterPromptUsecase.Response>

export namespace PrepareNewsletterPromptUsecase {
  export type Params = {
    news: string
    theme: string
    greet: string
    author: string
  }

  export type Response = string
}
