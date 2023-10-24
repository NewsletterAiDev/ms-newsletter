import { Routes } from '@/presentation/helpers'
import * as controllers from '@/presentation/controllers'

export const routes: Routes[] = [
  {
    path: '/generate',
    method: 'POST',
    handler: controllers.generateNewsletterController,
  },
  {
    path: '/list',
    method: 'GET',
    handler: controllers.listNewsletterController,
  },

]
