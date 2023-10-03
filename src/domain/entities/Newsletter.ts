import { Language } from "@/domain/entities"

export type Newsletter = {
  userUid: string
  uid: string
  text: string
  theme: string
  tone: string
  businessType: string
  author: string
  greet: string
  title: string
  websites: string[]
  language: Language
  createdAt: Date
}
