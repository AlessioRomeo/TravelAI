// generate.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { generateGeminiRequest, geminiService } from "../../controllers/geminiService";

export default async function generateHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { prompt } = req.body;
    
    // manually got the values of each variable, because throughout each stage the prompt is displayed as [object][object]
    const info = "destination: "+prompt.destination +" season: "+prompt.season+" hobbies: "+prompt.hobbies+" activity preferences: "+prompt.activityPreference;
    
    // Generate the request data for the Gemini API
  const geminiRequest = await generateGeminiRequest(info);
    console.log("this is the gemini request: "+geminiRequest);
    // Make the request to the Gemini API using geminiService
    const geminiResponse = await geminiService(geminiRequest);
    //testing
    console.log("this is the response: "+geminiResponse);

    res.status(200).json({ response: geminiResponse });
    console.log(geminiResponse); // Testing
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
