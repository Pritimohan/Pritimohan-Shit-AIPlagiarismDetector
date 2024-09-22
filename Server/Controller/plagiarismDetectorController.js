
import { model } from '../AiModel/model.js';
import { generationConfig } from '../utils/generationConfig.js';
import { parseOffice } from '../utils/officeParser.js'
import fs from 'fs';

export async function detectPlagiarism(req, res) {
    try {
        // Check if the file is uploaded
        if (!req.file) {
            return res.status(400).json({ error: "Please upload a file (.PDF or .docx)" });
        }
        const text = await parseOffice(req.file?.path); // Parse the office file
        if (!text) {
            return res.status(400).json({ error: "Error parsing the file" });
        }
        // Start a chat session
        const chatSession = model.startChat({
            generationConfig,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
            ],
        });

        // Send a message to the chat session
        const result = await chatSession.sendMessage(`"Analyze the provided text: '${text}' for potential plagiarism and deliver a highly accurate, concise report. The report must include:
1. Percentage of plagiarized content (must).
2. Sources of plagiarized material with precise references.
3. Short summaries of both unique and matched content.
4. Snippets of matched content with their corresponding sources.
5. Clear recommendations for improving originality.
6. Effective methods to avoid future plagiarism incidents.

Ensure all output is concise, highly accurate, and formatted in JSON."

     `);
        const josonResult = JSON.parse(result.response.text()); // Parse the JSON response

        if (!josonResult.data) {
            return res.status(400).json({ error: "Error parse JSON response" });
        }

        await fs.unlink(req.file?.path, (err) => {
            if (err) {
                throw new Error(err);
            }
        }) // Delete the uploaded file

        return res.status(200).json({ result: josonResult.data || '' }); // Send the parsed JSON response

    } catch (error) {
        console.log("serror from server", error);
        return res.status(500).json({ error: "internal server error from plagiarism detector" });
        return res.status(500).json({ error: "internal server error from plagiarism detector" });
    }
}
