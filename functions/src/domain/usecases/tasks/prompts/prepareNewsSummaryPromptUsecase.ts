export type PrepareNewsSummaryPromptUsecase = (params: PrepareNewsSummaryPromptUsecase.Params) => Promise<PrepareNewsSummaryPromptUsecase.Response>

export namespace PrepareNewsSummaryPromptUsecase {
  export type Params = {
    news: string
  }

  export type Response = string
}
