import { Routes } from '@/presentation/helpers'
import { generateNewsletterController } from '@/presentation/controllers'

export const routes: Routes[] = [
  {
    path: '/generate',
    method: 'post',
    handler: generateNewsletterController,
  },
]
