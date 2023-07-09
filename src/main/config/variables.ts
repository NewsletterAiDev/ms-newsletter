export const variables = {
  firebaseApiKey: process.env.FIREBASE_API_KEY ?? 'undefined',
  firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN ?? 'undefined',
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID ?? 'undefined',
  firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? 'undefined',
  firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? 'undefined',
  firebaseAppId: process.env.FIREBASE_APP_ID ?? 'undefined',
  firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID ?? 'undefined',
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
    return (value !== 'undefined')
  })
}
