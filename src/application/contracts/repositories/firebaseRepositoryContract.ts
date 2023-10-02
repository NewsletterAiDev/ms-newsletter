import { firestore } from 'firebase-admin'

export interface FirebaseRepositoryContract {
    db: firestore.Firestore
}
