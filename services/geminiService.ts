
import { GoogleGenAI } from "@google/genai";

// Fix: Use process.env.API_KEY directly as per the coding guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAccessibilityAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide expert advice as Desmond Delgadillo, an Assistive Technology Trainer. The user asks: "${query}". Keep it professional, empathetic, and focused on accessibility solutions.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I couldn't process that request right now. Please reach out via my contact form for direct assistance.";
  }
};

export const fetchLatestBlogPosts = async () => {
  // Simulating an API fetch with Gemini generating extra post summaries if needed
  // In a real app, this would be a fetch() call to a headless CMS
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), 100); 
  });
};
