import { variables } from './config'
import { initializeApp } from './app'
import * as controllers from '../presentation/controllers'

initializeApp()

const event = controllers.generateNewsletterController

const request = {
  author: variables.mockAuthor,
  greet: variables.mockGreet,
  theme: variables.mockTheme,
  days: +variables.mockDays,
}

event(request).then(console.log)
