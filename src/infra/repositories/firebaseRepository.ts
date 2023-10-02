import { FirebaseRepositoryContract } from '@/application/contracts/repositories'

import * as firebase from 'firebase-admin'

export class FirebaseRepository implements FirebaseRepositoryContract {
  private app: firebase.app.App
  public db: firebase.firestore.Firestore

  constructor(
    private readonly firebaseAdminSdk: any
  ) {
    this.app = firebase.apps.length ? firebase.app() : firebase.initializeApp({ credential: firebase.credential.cert(this.firebaseAdminSdk) })
    this.db = this.app.firestore()

    !(firebase.apps.length) && this.db.settings({ ignoreUndefinedProperties: true })
  }
}
