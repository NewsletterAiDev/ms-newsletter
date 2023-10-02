export interface PrepareNewsletterPromptTreaty {
  prepare(params: PrepareNewsletterPromptTreaty.Params): Promise<PrepareNewsletterPromptTreaty.Response>
}

export namespace PrepareNewsletterPromptTreaty {
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
