import { AiApiContract } from '../../application/contracts'

import { ChatCompletionResponseMessage, Configuration, OpenAIApi } from 'openai'

export class AiApiRepository implements AiApiContract {
  constructor(
    private readonly apiKey: string,
    private readonly model: string,
    private readonly temperature: number,
    private readonly frequencyPenalty: number,
    private readonly presencePenalty: number
  ) {}

  private openAi!: OpenAIApi

  private async initialize() {
    const configuration = new Configuration({
      apiKey: this.apiKey,
    })
    this.openAi = new OpenAIApi(configuration)
  }

  async inputPrompt({ prompt }: AiApiContract.InputPrompt.Params): Promise<AiApiContract.InputPrompt.Response> {
    if (!this.openAi) await this.initialize()

    const conversation: ChatCompletionResponseMessage[] = [{ 'role': 'user', 'content': prompt }]

    const completion = await this.openAi.createChatCompletion({
      model: this.model,
      temperature: this.temperature,
      frequency_penalty: this.frequencyPenalty,
      presence_penalty: this.presencePenalty,
      messages: conversation,
    })

    return completion.data.choices[0].message?.content ?? ''
  }
}
