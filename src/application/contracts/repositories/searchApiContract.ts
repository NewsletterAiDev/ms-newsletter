import { Language } from '@/domain/entities'

export interface SearchApiContract {
	fetch(params: SearchApiContract.Fetch.Params): Promise<SearchApiContract.Fetch.Response>
}

export namespace SearchApiContract {
	export namespace Fetch {
		export type Params = {
			query: string
			days: number
			websites: string[]
			language: Language
		}

		export type Response = any
	}
}
