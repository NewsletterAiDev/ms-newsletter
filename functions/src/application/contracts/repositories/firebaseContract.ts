import { firestore, auth, storage } from 'firebase-admin'

export interface FirebaseContract {
    db: firestore.Firestore
    auth: auth.Auth
    storage: storage.Storage
}
