export interface PreparePrioritizeNewsPromptUsecase {
  prepare(params: PreparePrioritizeNewsPromptUsecase.Params): Promise<PreparePrioritizeNewsPromptUsecase.Response>
}

export namespace PreparePrioritizeNewsPromptUsecase {
  export type Params = {
    news: string
  }

  export type Response = string
}
