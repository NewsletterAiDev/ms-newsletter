import { HashContract } from '../../application/contracts'
import { createHash } from 'crypto'


export class HashRepository implements HashContract {
    constructor() { }

    async hashString(hash: HashContract.HashString.Params): Promise<HashContract.HashString.Response> {
        return createHash('sha256').update(hash).digest('hex')
    }
}
