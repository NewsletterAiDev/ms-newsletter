import { PreparePrioritizeNewsPromptTreaty } from '@/application/tasks'

export class PreparePrioritizeNewsPromptTask implements PreparePrioritizeNewsPromptTreaty {
  async prepare({ news }: PreparePrioritizeNewsPromptTreaty.Params): Promise<PreparePrioritizeNewsPromptTreaty.Response> {
    const prompt = `
      Atue como um redator que determina a pauta de uma newsletter.

      Instruções para você seguir:
      - Priorize somente as matéria que vem de fontes confiáveis.
      - Só priorize matérias com URL's.
      - Ignore anúncios de cursos, certificados, seminários ou páginas iniciais e genéricas.
      - Ignore páginas de conteúdo genérico, como Wikipedia.
      - Priorize as matérias que foram publicadas na última semana.
      - Considere a relevância e o impacto potencial da notícia ao priorizá-las.
      - Por favor, traduza os títulos e a descrição das notícias para o português do Brasil.
      - Responda com o título, descrição e link das notícias:
      - Segue as notícias para criar a newsletter:
      ${news} 
    `

    return prompt
  }
}
