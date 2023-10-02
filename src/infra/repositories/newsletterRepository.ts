import { NewsletterRepositoryContract } from '@/application/contracts/repositories'
import { Newsletter } from '@/domain/entities'

import { firestore } from 'firebase-admin'

export class NewsletterRepository implements NewsletterRepositoryContract {
  private readonly newslettersRef: firestore.CollectionReference
  
  constructor(
    private readonly db: firestore.Firestore,
  ) {
    this.newslettersRef = this.db.collection('newsletters')
  }

  async saveNewsletter(params: NewsletterRepositoryContract.SaveNewsletter.Params): Promise<NewsletterRepositoryContract.SaveNewsletter.Response> {
    const { uid } = params
    const newsletter: Newsletter = { ...params, createdAt: new Date() }

    return this.newslettersRef
      .doc(uid)
      .create(newsletter)
      .then(() => newsletter)
  }

  async listNewsletterByUserUid(params: NewsletterRepositoryContract.ListNewsletterByUserUid.Params): Promise<NewsletterRepositoryContract.ListNewsletterByUserUid.Response> {
    const { userUid } = params

    return this.newslettersRef
      .where('userUid', '==', userUid)
      .get()
      .then(snapshot => {
        const newsletters: Newsletter[] = []
        snapshot.forEach(doc => newsletters.push(doc.data() as Newsletter))
        return newsletters
      })
      .catch(() => undefined)
  }
}
