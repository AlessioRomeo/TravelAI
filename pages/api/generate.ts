// generate.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { generateGeminiRequest, geminiService } from "../../controllers/geminiService";
import { useState } from 'react';

export default async function generateHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { prompt } = req.body;
 
    let Question = "You are a city guide specialist. You are in task of creating the perfect schedule for the traveler that is going to come to this city, make sure to make it as accurate as possible. The traveler will be traveling on these date(s)" + prompt.dates+
    " traveling to "+prompt.destination+", and will be staying at " +prompt.locationOfStay+ " with a daily budget of "+prompt.budget+
    ". With the interests being "+prompt.theme+" and hobbies being "+prompt.hobbies+" and activity preferences being "+prompt.activityPreference+
    " can you make a complete itinerary for me with at least 3 activities per day. Make it into a JSON file. Inside each day there should be a separate information about the activity such as start time end time, brief description of the activity and cost of the activity. Separately from the activity describe the transit time between the activities or transit to or from home to the activity, in the transit make sure to include the starting location such as exact train station or the corner where the bus stop is located at, which train or bus to take, how many stops to ride and on which one to exit. If the traveler is traveling by car, show approximate time to get from point A to point B according to the expected traffic on that date on that time in that location."
    const formatInstr = "Make sure to format the JSON file in the following way:"+
    "divide the file into days. Each day will consist of the activities and transit times, each day should start with the transit to the first location and each day should end with the transit taking the user back home"+
    ". Each activity should include the following information: name of the activity, start time, end time, description, cost."+
    " Each transit should include: the number of transit, transit time, start location such as exact bus stop or train stop, transfer location optional if needed, final destination exact bus stop or train stop to get off at, number of stops, and total transit cost."
    ". If the suer travels by car the transit section should include the following: Start address, end address, expected time of arrival according to the date and time of the day, toll cost if necessary otherwise write 0$"+
    ". If the optimal route is walking then make sure to include the following: Start address, end address, transit time"+
    "At the end of the itinerary make sure to write the total cost of each day and the total cost of the whole trip for all days."
   Question=Question+formatInstr;
  const geminiRequest = await generateGeminiRequest(Question);
    //console.log("this is the gemini request: "+geminiRequest);
    // Make the request to the Gemini API using geminiService
    const geminiResponse = await geminiService(geminiRequest);
    //testing
    console.log(geminiResponse);
    //I have to gather the info
    res.status(200).json({ response: geminiResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

