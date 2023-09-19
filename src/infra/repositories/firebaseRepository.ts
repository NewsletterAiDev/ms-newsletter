import { FirebaseRepositoryContract } from '../../application/contracts'

import * as firebase from 'firebase-admin'

export class FirebaseRepository implements FirebaseRepositoryContract {
  private app: firebase.app.App
  public db: firebase.firestore.Firestore
  public auth: firebase.auth.Auth
  public storage: firebase.storage.Storage

  constructor(
    private readonly firebaseAdminSdk: any
  ) {
    console.log(this.firebaseAdminSdk)
    this.app = firebase.apps.length ? firebase.app() : firebase.initializeApp({ credential: firebase.credential.cert(this.firebaseAdminSdk) })
    console.log('this.app')
    this.db = this.app.firestore()
    console.log('this.db')
    this.auth = this.app.auth()
    console.log('this.auth')
    this.storage = this.app.storage()
    console.log('this.storage')

    !(firebase.apps.length) && this.db.settings({ ignoreUndefinedProperties: true })
  }
}
