export type PreparePrioritizeNewsPromptUsecase = (params: PreparePrioritizeNewsPromptUsecase.Params) => Promise<PreparePrioritizeNewsPromptUsecase.Response>

export namespace PreparePrioritizeNewsPromptUsecase {
  export type Params = {
    summarizedNews: string
  }

  export type Response = string
}
