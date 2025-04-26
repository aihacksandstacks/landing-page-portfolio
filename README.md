# AI Landing Page Generator

This is a Next.js project that allows users to generate landing page content, specifically headlines, using AI based on their input.

## Core Functionality

- Users can enter a description of their product, company, or idea into a text input field.
- Clicking the "Generate Headline" button sends this description to a backend API endpoint.
- The backend API uses the OpenAI API (specifically, the `gpt-3.5-turbo` model) to generate a catchy headline based on the user's input.
- The generated headline is then displayed back to the user on the page.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root of the project directory. Add your OpenAI API key to this file:
    ```
    OPENAI_API_KEY=your_openai_api_key_here
    ```
    Replace `your_openai_api_key_here` with your actual key.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Current Status

- The application currently generates headlines based on user descriptions.
- It uses a basic, static frontend structure defined in `src/components/saas-landing-page.tsx`.
- The backend API route `src/app/api/generate-landing-page/route.ts` handles the interaction with the OpenAI API.
- Further development could involve generating more landing page elements (e.g., body copy, call-to-actions) and improving the UI/template.

## Technologies Used

- [Next.js](https://nextjs.org/) (React Framework)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)
- [OpenAI API](https://openai.com/api/) (for AI generation)
- [Shadcn/ui](https://ui.shadcn.com/) (for UI components like Button, Input)
