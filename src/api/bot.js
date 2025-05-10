import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const config = {
  responseMimeType: "text/plain",
  systemInstruction: [
    {
      text: `You are SoftBot, a professional and friendly AI assistant that helps users understand and evaluate their unused software licenses. 
  You specialize in software license resale, valuation, and guiding users through the process of selling them. 
  Always provide clear, concise, and helpful responses. If the user mentions any keywords like "license", "valuation", "price", or "payment", respond with information relevant to the resale and valuation process. 
  If a user's query is unclear, politely ask for more details to assist them better. 
  Stay on-topic and maintain a helpful, engaging tone.`,
    },
  ],
};

export async function get_response(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite",
    contents: prompt,
    config: config,
  });
  return response.text;
}
