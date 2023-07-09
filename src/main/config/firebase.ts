import { variables } from './variables'

export const firebaseConfig = {
  apiKey: variables.firebaseApiKey,
  authDomain: variables.firebaseAuthDomain,
  projectId: variables.firebaseProjectId,
  storageBucket: variables.firebaseStorageBucket,
  messagingSenderId: variables.firebaseMessagingSenderId,
  appId: variables.firebaseAppId,
  measurementId: variables.firebaseMeasurementId,
}
