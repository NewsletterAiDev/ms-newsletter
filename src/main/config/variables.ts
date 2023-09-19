export const variables = {
  firebaseAdminSdk: process.env.CONFIG_FIREBASE_ADMIN_SDK ?? 'undefined',
  googleSearchCx: process.env.GOOGLE_SEARCH_CX ?? 'undefined',
  googleSearchApiKey: process.env.GOOGLE_SEARCH_API_KEY ?? 'undefined',
  openAIApiKey: process.env.OPENAI_API_KEY ?? 'undefined',
  aiFrequencyPenalty: process.env.AI_FREQUENCY_PENALTY ?? 'undefined',
  aiPresencePenalty: process.env.AI_PRESENCE_PENALTY ?? 'undefined',
  aiTemperature: process.env.AI_TEMPERATURE ?? 'undefined',
  aiModel: process.env.AI_MODEL ?? 'undefined',
}

export const testVariables = (): boolean => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined' && value !== '')
  })
}
