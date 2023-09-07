import { PrepareNewsletterPromptUsecase } from '../../../../domain/usecases'

export class PrepareNewsletterPromptService implements PrepareNewsletterPromptUsecase {
  async prepare(params: PrepareNewsletterPromptUsecase.Params): Promise<PrepareNewsletterPromptUsecase.Response> {
    const { news, theme, greet, author, title, tone, businessType, bodyExample } = params

    const bodyExampleText = `
      <h1>${title}</h1>
      <p>${greet}</p>
      <br>
      <h2>(texto apresentando as noticias sobre o tema)<h2>
      <br>
      <strong>1️⃣ [TÍTULO DA NOTÍCIA]</strong><br>
      [Descrição da notícia]<br>
      <strong><a href="URL">domain</a></strong><br>
      <br>
      <strong>2️⃣ [TÍTULO DA NOTÍCIA]</strong><br>
      [Descrição da notícia]<br>
      <strong><a href="URL">domain</a></strong><br>
      <br>
      (e assim vai 3, 4, 5... com todas as notícias)

    `

    const prompt = `
      Instruções que você SEMPRE deve seguir: 
      1- Você é o escritor de uma newsletter chamada ${title}. 
      2- A newsletter ${title} é da ${businessType} chamada ${author}. 
      3- A sua newsletter é sobre ${theme}. 
      4- O seu tom de voz é ${tone}. 
      5- Você deve escrever a newsletter com base nas NOTÍCIAS DISPONÍVEIS. 
      6- No inicio, faça uma saudação padrão: ${greet}.
      7- No final, faça uma análise das notícias e crie um comentário curto e objetivo.
      8- A newsletter deve ser escrita em html para que seja usada em emails.
      9- A newsletter deve ser escrita em primeira pessoa, como se o ${author} estivesse escrevendo.
      10- A estrutura tem que seguir ambos as instuções e o exemplo abaixo.
      
      """"""
      A estrutura base que você deve seguir da newsletter é a seguinte: 

      ${bodyExample ?? bodyExampleText}

      """"""

      Segue as notícias para criar a newsletter: ${news}
    `

    return prompt
  }
}
