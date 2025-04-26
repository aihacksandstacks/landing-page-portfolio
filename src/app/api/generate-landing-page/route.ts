import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Instantiate the OpenAI client
// Ensure the OPENAI_API_KEY environment variable is set
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    // 1. Extract prompt from request body
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    console.log(`Received prompt: ${prompt}`);

    // 2. Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Or another suitable model
      messages: [
        { role: "system", content: "You are a helpful assistant that generates landing page content." },
        { role: "user", content: prompt }
      ],
      max_tokens: 150, // Adjust as needed
    });

    // 3. Extract generated content
    const generatedContent = completion.choices[0]?.message?.content;

    if (!generatedContent) {
      console.error("OpenAI response did not contain content:", completion);
      return NextResponse.json({ error: "Failed to generate content from AI" }, { status: 500 });
    }

    console.log(`Generated content: ${generatedContent}`);

    // 4. Return the generated content
    return NextResponse.json({ generatedText: generatedContent }, { status: 200 });

  } catch (error: any) {
    console.error("Error in API route:", error);

    // Specific error handling for OpenAI API errors
    if (error instanceof OpenAI.APIError) {
        console.error("OpenAI API Error:", error.status, error.name, error.message);
        return NextResponse.json({ error: `OpenAI API Error: ${error.message}` }, { status: error.status || 500 });
    }
    // Handle potential JSON parsing errors
    if (error instanceof SyntaxError) {
        return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }

    // Generic internal server error
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
