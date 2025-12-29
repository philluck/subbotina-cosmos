
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSkinAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Вы — виртуальный помощник косметолога Ирины Субботиной. Ответьте на вопрос пользователя о красоте и здоровье кожи. 
      Отвечайте профессионально, но доступно. В конце обязательно порекомендуйте записаться на очную консультацию к Ирине для постановки точного диагноза.
      
      Вопрос пользователя: ${userQuery}`,
      config: {
        systemInstruction: "Вы профессиональный ассистент косметолога с медицинским образованием. Ваш тон вежливый, экспертный и заботливый.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Извините, сейчас я не могу ответить. Пожалуйста, оставьте заявку через форму обратной связи, и Ирина свяжется с вами лично.";
  }
};
