import { GoogleGenAI } from "@google/genai";
import { tripCreationPromt } from "./constants";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyABHDpF1jGGueIL9uq3D3FS251EIgVk2mg",
});

export async function createTripAi(tripData) {
  try {
    const completedPromt = tripCreationPromt
      .replace("{location}", tripData.location)
      .replace("{noOfDays}", tripData.noOfDays)
      .replace("{budget}", tripData.budget)
      .replace("{traveler}", tripData.traveler);

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: completedPromt,
    });
    // console.log(response.text);
    return response.text;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
