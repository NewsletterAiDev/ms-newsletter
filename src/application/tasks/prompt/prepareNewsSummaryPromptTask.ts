import { PrepareNewsSummaryPromptTreaty } from '@/application/tasks'

export class PrepareNewsSummaryPromptTask implements PrepareNewsSummaryPromptTreaty {
  async prepare({ news }: PrepareNewsSummaryPromptTreaty.Params): Promise<PrepareNewsSummaryPromptTreaty.Response> {
    const prompt = `
      Resuma as matérias em português do Brasil como um criador de conteúdo excepcional. 
      Utilize a seguinte estrutura: título (headline), trecho (snippet) e inclua o link (URL) para cada trecho. 
      IMPORTANTE: NUNCA altere o URL original. 
      Segue as notícias:
      ${news.map((item) => `${item.title} - ${item.snippet} - ${item.link}`).join('\n')} 
    `

    return prompt
  }
}
