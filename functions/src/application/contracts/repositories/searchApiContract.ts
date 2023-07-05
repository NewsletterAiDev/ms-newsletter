export interface SearchApiContract {
    fetch(params: SearchApiContract.Fetch.Params): Promise<SearchApiContract.Fetch.Response>
}

export namespace SearchApiContract {
    export namespace Fetch {
        export type Params = {
            query: string
            days: number
        }

        export type Response = string | Error
    }
}
