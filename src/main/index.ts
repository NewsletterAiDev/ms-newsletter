import './config/moduleAlias'
import { routes } from '@/main/config'
import { defineHttpService } from '@/main/adapters'

export const newsletter = defineHttpService(routes)
