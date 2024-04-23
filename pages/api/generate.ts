// generate.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { generateGeminiRequest, geminiService } from "../../controllers/geminiService";
import { useState } from 'react';

export default async function generateHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { prompt } = req.body;
    
    // manually got the values of each variable, because throughout each stage the prompt is displayed as [object][object]
    let Question = "Hello on "+prompt.dates+" im going to "+prompt.area+","+prompt.destination+" with a daily budget of "+prompt.budget+". With my interests being "+prompt.theme+" and my hobbies being "+
    prompt.hobbies+" and my activity preferences being "+prompt.activityPreference+" can you make a complete itinerary for me with at least 5 activities per day making sure to include the activity cost and expected transit time from "+prompt.area+","+prompt.destination+
    " that starts from "+prompt.time
    const formatInstructions2 = " could you return it with the format of  time**location name**Transit_Method**Transit_Time**Cost, all this on one line per activity "
    Question = Question + formatInstructions2;
    console.log(Question);
    // Generate the request data for the Gemini API
  const geminiRequest = await generateGeminiRequest(Question);
    //console.log("this is the gemini request: "+geminiRequest);
    // Make the request to the Gemini API using geminiService
    const geminiResponse = await geminiService(geminiRequest);
    //testing
    console.log("this is the response: "+'\n'+geminiResponse);
    //I have to gather the info
    res.status(200).json({ response: geminiResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

