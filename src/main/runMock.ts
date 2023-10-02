import './config/moduleAlias'
import { initializeApp } from '@/main/app'
import * as controllers from '@/presentation/controllers'

initializeApp()

const event = controllers.generateNewsletterController

const request: any = {
  userUid: '123',
  author: 'Tiago Morelli',
  greet: 'Faaala, minhas lendas! ☕️',
  theme: 'Inteligencia Artificial',
  days: 90,
  tone: 'casual',
  businessType: 'startup',
  title: 'Newsletter da Semana - Startup',
  websites: [],
}

event(request).then(console.log)
