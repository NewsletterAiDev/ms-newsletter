export interface SearchApiContract {
    fetch(params: SearchApiContract.Fetch.Params): Promise<SearchApiContract.Fetch.Response>
}

export namespace SearchApiContract {
    export namespace Fetch {
        export type Params = {
            query: string
            days: number
        }

        export type Response = Array<any> | Error
    }

    export type SearchParams = {
        q: string,
        cx: string,
        key: string,
        dateRestrict: string,
        sort: string,
        lr: string
    }
}
