import { GoogleGenAI } from "@google/genai";

export const getAccessibilityAdvice = async (query: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Please set the API_KEY environment variable.");
    return "I'm currently unavailable for AI consultation because the API key is not configured. Please contact me directly via email for assistance.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
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
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), 100); 
  });
};