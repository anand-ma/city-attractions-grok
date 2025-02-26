import { generateText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

export const runtime = 'edge';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY || "",
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('city');

  if (!city) {
    return new Response("Missing city parameter", { status: 400 });
  }

  const prompt = `You are a helpful travel assistant providing information about city attractions. Return ONLY a valid JSON array of the top 6 attractions in ${city}, with no additional text or explanation. Each attraction should follow this exact structure:
[
  {
    "name": "string",
    "description": "string"
  }
]
Return only the JSON array and nothing else.`;

  try {
    const { text } = await generateText({
      model: groq('llama-3.1-8b-instant'),
      messages: [{ role: "user", content: prompt }],
    });

    return new Response(text);

  } catch (error: unknown) {
    console.error("Groq API Error:", error);
    return new Response(`Error fetching attractions: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 500 });
  }
}
