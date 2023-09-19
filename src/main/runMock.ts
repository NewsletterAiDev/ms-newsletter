import { initializeApp } from './app'
import * as controllers from '../presentation/controllers'

initializeApp()

const event = controllers.generateNewsletterController

const request: any = {
  userUid: '123',
  author: 'Tiago Morelli',
  greet: 'Faaala, minhas lendas! ☕️',
  theme: 'Inteligencia Artificial',
  days: 10,
  tone: 'casual',
  businessType: 'startup',
  title: 'Newsletter da Semana - Startup',
}

event(request).then(console.log)
