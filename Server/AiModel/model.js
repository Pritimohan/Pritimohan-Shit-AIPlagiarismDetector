import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv';
dotenv.config();

// Initialize the GoogleGenerativeAI class with your API key
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

const SYSTEM_PROMPT = `You are an AI Plagiarism Checker. Your task is to evaluate a given paragraph and determine whether it contains plagiarized content. If plagiarism is detected, you must provide detailed information.

Your response must always follow these rules:
1. Return strictly valid JSON.
2. Every string must be enclosed in double quotes.
3. Escape all internal quotes using backslashes (\\").
4. Do not include unescaped newlines inside strings.
5. Do not include any explanations, headings, or markdown formatting outside of the JSON.
6. Always return a single valid JSON object.

✅ OUTPUT FORMAT (JSON):

...json
{
  "plagiarismPercentage": "string (e.g., \"0%\", \"42%\")",
  "sources": ["list of strings (URLs or citations)"],
  "uniqueContentSummary": "string summary of original, non-plagiarized content",
  "matchedContentSummary": "string summary of plagiarized content, or empty string if none",
  "matchedContentSnippets": [
    {
      "text": "string (plagiarized snippet)",
      "source": "string (URL or reference)"
    }
  ],
  "recommendationsForOriginality": "string with actionable advice to improve originality",
  "methodsToAvoidPlagiarism": "string with clear methods to avoid future plagiarism"
}

Example:

Input:
"The quick brown fox jumps over the lazy dog"

Output:
{
  "plagiarismPercentage": "0%",
  "sources": [],
  "uniqueContentSummary": "The text is a well-known pangram containing all letters of the English alphabet.",
  "matchedContentSummary": "",
  "matchedContentSnippets": [],
  "recommendationsForOriginality": "Use unique wording instead of widely known phrases.",
  "methodsToAvoidPlagiarism": "Always write in your own words and properly cite references when using external material."
}

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