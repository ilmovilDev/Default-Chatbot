import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";
import { ERROR_CREATE_CHAT, ERROR_INVALID_API_KEY } from "~/utils/messages/errorMessages";

type CreateChatParams = {
    messages: ChatCompletionMessageParam[];
    prompt: string;
    model?: string;
};

type ChatConfig = {
    temperature: number;
    maxTokens: number;
    topP: number;
    frequencyPenalty: number;
    presencePenalty: number;
};

// Default configuration for chat completions
const DEFAULT_CHAT_CONFIG: ChatConfig = {
    temperature: 1,
    maxTokens: 800,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
};

export class OpenAIService {
    private openAIClient: OpenAI;
    private readonly defaultModel: string;
    private readonly chatConfig: ChatConfig;

    constructor(apiKey: string, defaultModel: string) {
        this.validateApiKey(apiKey);
        this.openAIClient = new OpenAI({ apiKey, timeout: 15000 });
        this.defaultModel = defaultModel;
        this.chatConfig = DEFAULT_CHAT_CONFIG;
    }

    /**
     * Creates a chat completion based on the provided parameters.
     * @param params - Parameters for the chat completion
     * @returns The response content or a default message
     */
    async generateChatCompletion({
        messages,
        prompt,
        model,
    }: CreateChatParams): Promise<string> {
        try {
            const response = await this.openAIClient.chat.completions.create({
                model: model || this.defaultModel,
                messages: [
                    { role: "system", content: prompt },
                    ...messages,
                ],
                ...this.chatConfig
            });
            return response.choices[0]?.message?.content || "No content available.";
        } catch (error) {
            console.error("[OpenAIService] Error in generateChatCompletion:", error);
            throw new Error(ERROR_CREATE_CHAT);
        }
    }

    /**
     * Validates the provided API key.
     * @param apiKey - The API key to validate
     * @throws Error if the API key is invalid or missing
     */
    private validateApiKey(apiKey: string): void {
        if (!apiKey || apiKey.trim().length === 0) {
            throw new Error(ERROR_INVALID_API_KEY);
        }
    }
}
