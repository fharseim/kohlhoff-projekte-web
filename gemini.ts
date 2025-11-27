import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for Kohlhoffprojekte, a premier German real estate development firm.
Your tone is professional, precise, ambitious, and elegant. You speak German by default, but can switch to English if addressed in English.
You embody the company's values of "Vision, Präzision, Tradition" and "Leistungswille" (will to perform).
Refuse to answer questions unrelated to real estate, architecture, design, or the company.
Keep your responses concise and sophisticated.
If asked about specific projects, mention "Hafenquartier Hamburg", "Oberegg Lodge", or "Friedrichstraße 204" with details about their sustainability and architectural excellence.
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({
      message: newMessage,
    });

    return result.text || "Entschuldigung, ich kann Ihre Anfrage momentan nicht bearbeiten.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ich habe derzeit Verbindungsprobleme. Bitte versuchen Sie es in Kürze erneut.";
  }
};