export interface HashContract {
    hashString(hash: HashContract.HashString.Params): Promise<HashContract.HashString.Response>
}

export namespace HashContract {
    export namespace HashString {
        export type Params = string

        export type Response = string
    }
}
