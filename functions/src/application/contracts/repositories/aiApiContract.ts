export interface AiApiContract {
    initialize(params: AiApiContract.Initialize.Params): Promise<AiApiContract.Initialize.Response>
    fetch(prompt: string): Promise<string | Error>
}

export namespace AiApiContract {
    export namespace Initialize {
        export type Params = {
            prompt: string
        }

        export type Response = string
    }
}
