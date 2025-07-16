
import { model } from '../AiModel/model.js';
import { generationConfig } from '../utils/generationConfig.js';
import { parseOffice } from '../utils/officeParser.js'
import fs from 'fs';

export async function detectPlagiarism(req, res) {

    try {
        // Check if the file is uploaded
        if (!req.file) return res.status(400).json({ error: "Please upload a file (.PDF or .docx)" });
        const text = await parseOffice(req.file?.path); // Parse the office file
        if (!text) return res.status(400).json({ error: "Error parsing the file" });
        // Start a chat session
        const chatSession = model.startChat({
            generationConfig,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [
            ],
        });

        // Send a message to the chat session
        const result = await chatSession.sendMessage(text);
        // console.log("result from server", result.response.text());
        
        const jsonResult = JSON.parse(result.response.text()); // Parse the response to JSON
        if (!jsonResult.data) return res.status(400).json({ error: "Error parse JSON response" });
        
        await fs.unlink(req.file?.path, (err) => {
            if (err) {
                throw new Error(err);
            }
        }) // Delete the uploaded file

        return res.status(200).json({ result:jsonResult.data || '' }); // Send the parsed JSON response

    } catch (error) {
        console.log("serror from server", error);
        return res.status(500).json({ error: "internal server error from plagiarism detector" });
    }
}
