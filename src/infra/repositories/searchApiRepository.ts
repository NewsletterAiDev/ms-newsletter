import { SearchApiContract } from '@/application/contracts/repositories'

import { getJson, GoogleParameters } from 'serpapi'

export class SearchApiRepository implements SearchApiContract {
  constructor(
    private readonly apiKey: string
  ) { }

  async fetch(params: SearchApiContract.Fetch.Params): Promise<SearchApiContract.Fetch.Response> {
    const { query, days, websites, language } = params

    const limitedToWebsitesQuery = websites.map((website) => `site: ${website}`).join(' OR ') + query

    const searchParams: GoogleParameters = {
      q: limitedToWebsitesQuery,
      hl: language,
      api_key: this.apiKey,
      as_q: `d${days}`,
    }

    const response = await getJson('google', searchParams)
    console.log(response.organic_results)

    return response.organic_results.map((result: any) => ({
      title: result.title,
      link: result.link,
      snippet: result.snippet,
    }))
  }
}
