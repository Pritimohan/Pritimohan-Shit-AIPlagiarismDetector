import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import dotenv from 'dotenv';

dotenv.config();
  
  // Initialize the GoogleGenerativeAI class with your API key
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  // Get the generative model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  export {model};