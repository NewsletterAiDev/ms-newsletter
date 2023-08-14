export const variables = {
  firebaseType: process.env.CONFIG_FIREBASE_TYPE ?? 'undefined',
  firebaseProjectId: process.env.CONFIG_FIREBASE_PROJECT_ID ?? 'undefined',
  firebasePrivateKeyId: process.env.CONFIG_FIREBASE_PRIVATE_KEY_ID ?? 'undefined',
  firebasePrivateKey: process.env.CONFIG_FIREBASE_PRIVATE_KEY ?? 'undefined',
  firebaseClientEmail: process.env.CONFIG_FIREBASE_CLIENT_EMAIL ?? 'undefined',
  firebaseClientId: process.env.CONFIG_FIREBASE_CLIENT_ID ?? 'undefined',
  firebaseAuthUri: process.env.CONFIG_FIREBASE_AUTH_URI ?? 'undefined',
  firebaseTokenUri: process.env.CONFIG_FIREBASE_TOKEN_URI ?? 'undefined',
  firebaseAuthProvider: process.env.CONFIG_FIREBASE_AUTH_PROVIDER ?? 'undefined',
  firebaseClientCert: process.env.CONFIG_FIREBASE_CLIENT_CERT ?? 'undefined',
  firebaseUniverseDomain: process.env.CONFIG_FIREBASE_UNIVERSE_DOMAIN ?? 'undefined',
  googleSearchCx: process.env.GOOGLE_SEARCH_CX ?? 'undefined',
  googleSearchApiKey: process.env.GOOGLE_SEARCH_API_KEY ?? 'undefined',
  openAIApiKey: process.env.OPENAI_API_KEY ?? 'undefined',
  aiFrequencyPenalty: process.env.AI_FREQUENCY_PENALTY ?? 'undefined',
  aiPresencePenalty: process.env.AI_PRESENCE_PENALTY ?? 'undefined',
  aiTemperature: process.env.AI_TEMPERATURE ?? 'undefined',
  aiModel: process.env.AI_MODEL ?? 'undefined',
  mockTheme: process.env.MOCK_THEME ?? 'undefined',
  mockGreet: process.env.MOCK_GREET ?? 'undefined',
  mockAuthor: process.env.MOCK_AUTHOR ?? 'undefined',
  mockDays: process.env.MOCK_DAYS ?? 'undefined',
}

export const testVariables = (): boolean => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined' && value !== '')
  })
}
