import { Routes } from '@/presentation/helpers'
import * as controllers from '@/presentation/controllers'

export const routes: Routes[] = [
  {
    path: '/generate',
    method: 'post',
    handler: controllers.generateNewsletterController,
  },
  {
    path: '/list',
    method: 'get',
    handler: controllers.listNewsletterController,
  },

]
