# Default Chatbot with BuilderBot

This project is a customizable chatbot built using the [BuilderBot](https://builderbot.com/) framework. The chatbot integrates with OpenAI's API to provide intelligent conversational capabilities.

---

## Features

- **Conversation Management:** Handles dynamic conversations with users.
- **OpenAI Integration:** Leverages GPT-based models for intelligent responses.
- **Easy Configuration:** Modify templates, prompts, and behaviors as needed.
- **Database Support:** Includes integration for database operations.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or later)
- **Pnpm** (recommended) or npm
- **Environment Variables:** Create a `.env` file with the following variables:
  ```env
  PORT=3002
  OPENAI_API_KEY=your_openai_api_key
  ```

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/default-chatbot.git
   cd default-chatbot
   ```

2. **Install Dependencies:**
   Using Pnpm (recommended):
   ```bash
   pnpm install
   ```
   Or with npm:
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   Ensure the `.env` file is properly configured with the required keys.

---

## Running Locally

1. **Start the Bot:**
   Using Pnpm:
   ```bash
   pnpm dev
   ```
   Or with npm:
   ```bash
   npm start
   ```

2. **Access the Bot:**
   The bot will run on the specified `PORT` (default: `3002`). Open your browser or testing tool and connect to:
   ```
   http://localhost:3002
   ```

---

## Project Structure

```
|-- src/
|   |-- config/          # Configuration files
|   |-- services/        # OpenAI and other services
|   |-- templates/       # Message templates
|   |-- database/        # Database setup
|   |-- provider/        # Custom providers
|-- .env                 # Environment variables
|-- package.json         # Project dependencies
```

---

## Customization

- Modify templates in `src/templates` to adjust bot responses.
- Add or update OpenAI prompts in `src/services/OpenAIService`.
- Integrate additional services or APIs as needed.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contributions

Feel free to submit issues or pull requests to improve this chatbot. For major changes, please discuss them first by opening an issue.