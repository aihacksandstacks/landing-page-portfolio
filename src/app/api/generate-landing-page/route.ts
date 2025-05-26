import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Instantiate the OpenAI client
// Ensure the OPENAI_API_KEY environment variable is set
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    // 1. Extract prompt and template from request body
    const { prompt, template = 'Thinkific' } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    console.log(`Received prompt: ${prompt}, template: ${template}`);

    // 2. Ask for a full landing page schema as JSON, using the selected template style
    let styleInstruction = '';
    switch (template) {
      case 'Thinkific':
        styleInstruction = 'Use a clean teal-blue and white color palette, multi-offer SaaS sections, modern fonts.';
        break;
      case 'Netflix':
        styleInstruction = 'Use a black background with bold red accents, single subscription offer, minimal copy, email input CTA.';
        break;
      case 'LinkedIn Premium':
        styleInstruction = 'Use professional blue and white colors, highlight upgrade features with data points, single CTA.';
        break;
      default:
        styleInstruction = `Use the ${template} style.`;
    }
    const structuredPrompt = `Based on the ${template} template style: ${styleInstruction}
Generate a landing page as a JSON object with the following keys:
{
  "headline": string,
  "subheadline": string,
  "description": string,
  "features": string[],
  "callToAction": { "text": string, "url": string }
}
Use the following product description to fill in the values:
${prompt}
Respond ONLY with the JSON.`;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a JSON generator for landing pages." },
        { role: "user", content: structuredPrompt }
      ],
      max_tokens: 500,
    });

    // 3. Parse JSON from the AI response
    const raw = completion.choices[0]?.message?.content;
    if (!raw) {
      console.error("OpenAI returned empty response", completion);
      return NextResponse.json({ error: "Empty response from AI" }, { status: 500 });
    }
    const jsonStart = raw.indexOf('{');
    const jsonString = jsonStart >= 0 ? raw.slice(jsonStart) : raw;
    let pageData;
    try {
      pageData = JSON.parse(jsonString);
    } catch (err) {
      console.error("Failed to parse AI JSON:", raw, err);
      return NextResponse.json({ error: "Invalid JSON from AI" }, { status: 500 });
    }
    // 4. Return the structured landing page data
    return NextResponse.json(pageData, { status: 200 });

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
