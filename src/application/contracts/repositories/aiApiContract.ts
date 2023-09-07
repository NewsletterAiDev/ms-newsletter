export interface AiApiContract {
    initialize(): Promise<any>
    inputPrompt(prompt: string): Promise<string | Error>
}
