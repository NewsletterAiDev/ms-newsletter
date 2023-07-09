import { defineEndpoint } from '../adapters/routesAdapter'
import { generateNewsletterController } from '../../presentation/controllers'


export const newsletter = defineEndpoint({
  post: generateNewsletterController,
})

