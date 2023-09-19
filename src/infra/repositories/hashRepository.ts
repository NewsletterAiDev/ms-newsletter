import { HashRepositoryContract } from '../../application/contracts'
import { createHash } from 'crypto'

export class HashRepository implements HashRepositoryContract {
  constructor() { }

  async generateRandomKey({ length }: HashRepositoryContract.GenerateRandomKey.Params): Promise<HashRepositoryContract.GenerateRandomKey.Response> {
    const randomKey = createHash('sha256').update(Math.random().toString()).digest('hex').slice(0, length)

    return randomKey
  }
}
