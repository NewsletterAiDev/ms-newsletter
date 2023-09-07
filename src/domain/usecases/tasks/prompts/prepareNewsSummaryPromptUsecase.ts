export interface PrepareNewsSummaryPromptUsecase {
  prepare(params: PrepareNewsSummaryPromptUsecase.Params): Promise<PrepareNewsSummaryPromptUsecase.Response>
}

export namespace PrepareNewsSummaryPromptUsecase {
  export type Params = {
    news: Array<{
      title: string
      snippet: string
      link: string
    }>
  }

  export type Response = string
}
