import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.CHATGPT_SECRET_KEY,
});

export async function GET() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{
      role: "user", content:
        `prompt me necessary html for a simple portfolio website, 
      but only give me the content inside body tag, excluding the body tag,
      don't forget to add styling` }],
    model: "gpt-3.5-turbo",
  });

  return NextResponse.json({ data: chatCompletion }, { status: 200 });
}
