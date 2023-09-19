export interface AiApiContract {
    inputPrompt(params: AiApiContract.InputPrompt.Params): Promise<AiApiContract.InputPrompt.Response>
}


export namespace AiApiContract {
    export namespace InputPrompt {
        export type Params = {
            prompt: string
        }

        export type Response = string
    }
}
