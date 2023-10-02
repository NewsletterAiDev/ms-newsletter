export interface PreparePrioritizeNewsPromptTreaty {
  prepare(params: PreparePrioritizeNewsPromptTreaty.Params): Promise<PreparePrioritizeNewsPromptTreaty.Response>
}

export namespace PreparePrioritizeNewsPromptTreaty {
  export type Params = {
    news: string
  }

  export type Response = string
}
