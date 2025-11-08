import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const completion = await openai.chat.completions.create({
    model: 'openrouter/polaris-alpha',
    messages: [
      {
        role: 'user',
        content: 'What is the meaning of life?',
      },
    ],
  });

  return Response.json({
    role: "assistant",
    content: console.log(completion.choices[0].message),
    refusal: null,
    reasoning: null,
  });
}
