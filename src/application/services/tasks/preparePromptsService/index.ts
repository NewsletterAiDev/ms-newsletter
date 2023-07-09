import { newsletterPrompt } from './prepareNewsletterPromptService'
import { newsSummaryPrompt } from './prepareNewsSummaryPromptService'
import { prioritizePrompt } from './preparePrioritizeNewsPromptService'

export const preparePromptsService = {
  newsSummary: newsSummaryPrompt,
  newsletter: newsletterPrompt,
  prioritizeNews: prioritizePrompt,
}
