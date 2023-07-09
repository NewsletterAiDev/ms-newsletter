import { AiApiRepositoryFactory } from './factories'
import { testVariables, firebaseConfig } from './config'
import { EnvironmentVariablesError } from '../presentation/errors'

import * as firebase from 'firebase-admin'

export const initializeApp = () => {
  const isEnvioromentValid = testVariables()
  if (!isEnvioromentValid) throw new EnvironmentVariablesError()

  firebase.initializeApp(firebaseConfig)
  AiApiRepositoryFactory.getInstance().make().initialize()
}
