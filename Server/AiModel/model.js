import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv';
dotenv.config();

// Initialize the GoogleGenerativeAI class with your API key
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

const SYSTEM_PROMPT = `You are a Ai Plagiarism Checker. You are given a paragraph and you have to check if it is plagiarised or not. If it is plagiarised, you have to provide the following information:
1. Percentage of plagiarized content (must).
2. Sources of plagiarized material with precise references.
3. Short summaries of both unique and matched content.(must)
4. Snippets of matched content with their corresponding sources.
5. Clear recommendations for improving originality.
6. Effective methods to avoid future plagiarism incidents.

Always respond with strictly valid JSON. Ensure all strings are properly enclosed in double quotes, escape any internal quotes with backslashes (\\\"), and avoid unescaped newlines inside strings. Do not return partial or malformed JSON. Each response must be a single, syntactically correct JSON object or array without explanation or surrounding text.

The output should be short and concise, focusing on the key points without unnecessary elaboration. The JSON structure should be as follows:
for example, if the text is "The quick brown fox jumps over the lazy dog", you should respond with:
const exampleText = "The quick brown fox jumps over the lazy dog";
const exampleResponse = 
{
    "plagiarismPercentage": "0%",
    "sources": [],
    "uniqueContentSummary": "The text is a well-known pangram that contains all the letters of the English alphabet.",
    "matchedContentSummary": "",
    "matchedContentSnippets": [],
    "recommendationsForOriginality": "Use unique phrases and avoid common expressions.",
    "methodsToAvoidPlagiarism": "Always write in your own words and cite sources when necessary."
}
"
  `;


// Get the generative model
const model = genAI.getGenerativeModel(
  {
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM_PROMPT,
  }
);

export { model };




// "Analyze the provided text: '${text}' for potential plagiarism and deliver a highly accurate, concise report. The report must include:
// 1. Percentage of plagiarized content (must).
// 2. Sources of plagiarized material with precise references.
// 3. Short summaries of both unique and matched content.
// 4. Snippets of matched content with their corresponding sources.
// 5. Clear recommendations for improving originality.
// 6. Effective methods to avoid future plagiarism incidents.

// Ensure all output is concise, highly accurate, and formatted in JSON."