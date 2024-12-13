import { createBot } from '@builderbot/bot';
import { envConfig } from './config';
import { OpenAIService } from './services';
import templates from './templates';
import { database } from './database';
import { provider } from './provider';


const PORT = envConfig().port;
const openaiApiKey = envConfig().open_api_key
const openai = new OpenAIService(openaiApiKey, 'gpt-3.5-turbo')

const main = async () => {
    const { handleCtx, httpServer } = await createBot({
        flow: templates,
        provider,
        database,
    }, { extensions: { openai }})
    httpServer(Number(PORT))
}

main()