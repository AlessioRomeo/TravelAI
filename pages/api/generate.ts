// generate.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { generateGeminiRequest, geminiService } from "../../controllers/geminiService";
import { useState } from 'react';

export default async function generateHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { prompt } = req.body;
    
    let Question = "You are a city guide specialist, your task is to help the user to create the best route possible and include all the information about it.\
    The traveler will be available to explore on " + prompt.dates + ", and will be visiting " +
    prompt.destination + ", will be living at " + prompt.locationOfStay + ". The traveller's will be available between the hours of "+
    prompt.time + " on the dates above, will have the daily budget of " + prompt.budget + ". Traveller has these hobbies " +
    prompt.hobbies + ", prefers " + prompt.activityPreference + " activities that are themed " + prompt.theme + ", and will be travelling by " +
    prompt.transportationPreference + ". \n";
    const formatInstr = "Make sure to give your response in the JSON format. The structure of your JSON file should be the following:\
    day number such as 1,2 or 3. In each day there should be at least 3 activities and places to visit that do not include the transit.\
    Each activity should consist of the following: name of the place or the activity, start time of the activity, end time of the activity\
    , description of the activity and cost of the activity. Between each activity make sure to include a transit activity which you will also name activity\
    in this activity you will specify a few things: name that can include the style of transit such as bus subway walking or by car or a few at the same time,\
     start time of the transfer, end time of the transfer or eta based on the estimated time at that date and time, detailed description of the transfer\
     that includes on which station or bus stop to get on or get off at and how many to ride, if walking then specify turns needed to make at which streets which way to head \
     specify the complete route from point A to point B to make sure very turn and direction are listed, \
     if traveling on a car then specify specific turns needed to make and include information about nearby parking available and their rates, lastly should be \
     cost of transfer, such as bus or subway fare, estimated cost of gas(assume MPG of 20 is achieved) or tolls if applied. One more thing\
      make sure in your JSON file, the first activity of the day is the transit from home to the first activity and at the end\
       of the day the last thing is the transit back home from the latest location. Make sure to not number the activities and just\
       name them as 'activitiy'. Thank you!"

       Question=Question+formatInstr;
    const geminiRequest = await generateGeminiRequest(Question);

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

