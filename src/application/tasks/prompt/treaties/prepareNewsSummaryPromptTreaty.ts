export interface PrepareNewsSummaryPromptTreaty {
  prepare(params: PrepareNewsSummaryPromptTreaty.Params): Promise<PrepareNewsSummaryPromptTreaty.Response>
}

export namespace PrepareNewsSummaryPromptTreaty {
  export type Params = {
    news: Array<{
      title: string
      snippet: string
      link: string
    }>
  }

  export type Response = string
}
