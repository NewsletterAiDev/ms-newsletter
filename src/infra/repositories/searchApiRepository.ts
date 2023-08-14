import axios from 'axios'
import { SearchApiContract } from '../../application/contracts'
import { handleErrorService } from '../../application/services'

export class SearchApiRepository implements SearchApiContract {
  constructor(
    private readonly apiKey: string,
    private readonly searchCx: string
  ) { }

  async fetch(params: SearchApiContract.Fetch.Params): Promise<SearchApiContract.Fetch.Response> {
    try {
      const { query, days } = params

      const today = new Date()

      const endDate = new Date().toLocaleDateString('en-GB')
      const startDate = new Date(today.getTime() - days * 86400000).toLocaleDateString('en-GB')

      const searchParams: SearchApiContract.SearchParams = {
        q: query,
        cx: this.searchCx,
        key: this.apiKey,
        dateRestrict: `${endDate},${startDate}`,
        sort: 'date',
        lr: 'lang_pt',
      }

      const response = await axios.get('https://www.googleapis.com/customsearch/v1', { params: searchParams })

      return response.data.items
    } catch (err: any) {
      console.log(err)
      return await handleErrorService(err.message)
    }
  }
}
