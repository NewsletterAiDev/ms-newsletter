export interface AiApiContract {
    initialize(): Promise<any>
    fetch(prompt: string): Promise<string | Error>
}
