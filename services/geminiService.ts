
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
      utilitarianism: {
        type: Type.OBJECT,
        description: "Analysis from a utilitarian perspective, focusing on maximizing overall good and minimizing harm.",
        properties: {
          summary: { type: Type.STRING, description: "A concise summary of the utilitarian analysis." },
          points: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key bullet points highlighting utilitarian considerations." },
        },
        required: ["summary", "points"]
      },
      deontology: {
        type: Type.OBJECT,
        description: "Analysis based on deontology, focusing on moral duties, rules, and rights.",
        properties: {
          summary: { type: Type.STRING, description: "A concise summary of the deontological analysis." },
          points: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key bullet points highlighting deontological considerations." },
        },
        required: ["summary", "points"]
      },
      virtue_ethics: {
        type: Type.OBJECT,
        description: "Analysis from a virtue ethics perspective, focusing on the character and virtues promoted.",
        properties: {
          summary: { type: Type.STRING, description: "A concise summary of the virtue ethics analysis." },
          points: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key bullet points highlighting virtue ethics considerations." },
        },
        required: ["summary", "points"]
      },
      justice_and_equity: {
        type: Type.OBJECT,
        description: "Analysis of justice and equity, focusing on the distribution of benefits, burdens, and risks.",
        properties: {
          summary: { type: Type.STRING, description: "A concise summary of the justice and equity analysis." },
          points: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key bullet points highlighting justice and equity considerations." },
        },
        required: ["summary", "points"]
      },
      environmental_impact: {
        type: Type.OBJECT,
        description: "Analysis of the environmental impact and sustainability.",
        properties: {
          summary: { type: Type.STRING, description: "A concise summary of the environmental impact analysis." },
          points: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key bullet points highlighting environmental considerations." },
        },
        required: ["summary", "points"]
      },
      transparency_and_accountability: {
        type: Type.OBJECT,
        description: "Analysis of transparency in decision-making and accountability for outcomes.",
        properties: {
          summary: { type: Type.STRING, description: "A concise summary of the transparency and accountability analysis." },
          points: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key bullet points highlighting transparency and accountability considerations." },
        },
        required: ["summary", "points"]
      },
    }
};


export const analyzeText = async (text: string): Promise<AnalysisResult> => {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable is not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `Analyze the following text on AI and energy policy from multiple ethical perspectives. 
    
    Text: "${text}"
    
    Provide a detailed analysis for each framework.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: analysisSchema,
        },
    });

    try {
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);
        return result as AnalysisResult;
    } catch (e) {
        console.error("Failed to parse Gemini response as JSON:", e);
        console.error("Raw response text:", response.text);
        throw new Error("The analysis could not be completed. The model returned an invalid format.");
    }
};
