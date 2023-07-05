import { FirebaseContract } from '../../application/contracts'

import { firestore, auth, storage } from 'firebase-admin'

export class FirebaseRepository implements FirebaseContract {
    public db: firestore.Firestore
    public auth: auth.Auth
    public storage: storage.Storage

    constructor() {
        this.db = firestore()
        this.auth = auth()
        this.storage = storage()
    }
}


