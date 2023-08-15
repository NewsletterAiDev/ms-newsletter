import { routes } from './config'
import { defineHttpService } from './adapters'

export const newsletter = defineHttpService(routes)
