// generate.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { generateGeminiRequest, geminiService } from "../../controllers/geminiService";

export default async function generateHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { prompt } = req.body;

    // Generate the request data for the Gemini API
    const geminiRequest = await generateGeminiRequest(prompt);

    // Make the request to the Gemini API using geminiService
    const geminiResponse = await geminiService(geminiRequest);

    res.status(200).json({ response: geminiResponse });
    console.log(geminiResponse); // Testing
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
