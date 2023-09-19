export interface HashRepositoryContract {
    generateRandomKey(params: HashRepositoryContract.GenerateRandomKey.Params): Promise<HashRepositoryContract.GenerateRandomKey.Response>
}

export namespace HashRepositoryContract {
    export namespace GenerateRandomKey {
        export type Params = {
            length: number
        }

        export type Response = string
    }
}
