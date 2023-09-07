import { variables } from './config'
import { initializeApp } from './app'
import * as controllers from '../presentation/controllers'

initializeApp()

const event = controllers.generateNewsletterController

const request: any = {
  author: variables.mockAuthor,
  greet: variables.mockGreet,
  theme: variables.mockTheme,
  days: +variables.mockDays,
  tone: 'casual',
  businessType: 'startup',
  title: 'Newsletter da Semana - Startup',
}

event(request).then(console.log)
