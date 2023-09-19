import { firestore } from 'firebase-admin'
import { NewsletterRepositoryContract } from '../../application/contracts'
import { Newsletter } from '../../domain/entities'

export class NewsletterRepository implements NewsletterRepositoryContract {
  constructor(
    private readonly db: firestore.Firestore,
  ) {}

  async saveNewsletter(params: NewsletterRepositoryContract.SaveNewsletter.Params): Promise<NewsletterRepositoryContract.SaveNewsletter.Response> {
    const { uid } = params
    const newsletter: Newsletter = { ...params, createdAt: new Date() }

    return this.db.collection('newsletters').doc(uid).create(newsletter).then(() => newsletter)
  }
}
