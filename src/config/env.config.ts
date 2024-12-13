import "dotenv/config";

type TConfigResponse = {
    port: string;
    open_api_key: string;
}

const getEnvVar = (
    key: string, 
    isRequired: boolean = true
): string | undefined => {
    const value = process.env[key];
    if (isRequired && (!value || value.trim() === "")) {
        throw new Error(`Environment variable ${key} is required but was not provided.`);
    }
    return value;
};

export const envConfig = (): TConfigResponse => {

    const PORT = getEnvVar("PORT", false) ?? "3002";
    const OPENAI_API_KEY = getEnvVar("OPENAI_API_KEY");

    return {
        // Global
        port: PORT,
        // OpenAI
        open_api_key: OPENAI_API_KEY
    }
}