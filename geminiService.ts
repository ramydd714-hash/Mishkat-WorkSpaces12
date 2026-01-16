
import { GoogleGenAI } from "@google/genai";

export const editImageWithGemini = async (base64Image: string, prompt: string): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    // Clean base64 string
    const dataOnly = base64Image.split(',')[1] || base64Image;
    
    // Using gemini-3-pro-image-preview for high quality visual adjustments like lighting and texture
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: dataOnly,
              mimeType: 'image/png',
            },
          },
          {
            text: `Act as a professional food photographer and cake designer. ${prompt}. Maintain the exact shape and decorations of the cake, but dramatically adjust the lighting to create a professional spotlight effect that emphasizes its textures and forms. High resolution, professional studio lighting.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Edit Error:", error);
    // Fallback logic for key selection if error indicates it
    if (error instanceof Error && error.message.includes("Requested entity was not found")) {
       if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
         window.aistudio.openSelectKey();
       }
    }
    throw error;
  }
};
