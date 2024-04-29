"use server";
import {geminiService, generateGeminiRequest} from "../../controllers/geminiService";

export async function generate(prompt) {
    let Question = "You are a city guide specialist tasked with designing an optimal sightseeing route. The traveler will explore " + prompt.destination +
        " on " + prompt.dates + ", staying at " + prompt.area +
        ". He will be available at " + prompt.time + " each day, the traveler has a daily budget of " + prompt.budget +
        ", he needs to visit " + prompt.hobbies + ", prefers " + prompt.activityPreference +
        " activities, and likes to use " + prompt.transport + " for transportation. The traveler expressed interest in " +
        prompt.interests + " and confirmed traveling alone with a budget of " + prompt.budget + ".";

    const formatInstr = `Provide your itinerary in JSON format, focusing on alternating transit and activity entries. Each day should start with a transit from the accommodation to the first activity and end with a return transit. Include detailed descriptions, directions, and costs for each segment. Here’s the structure for each day, identified by date:

                                {
                                  '02/05/24': [
                                    {
                                      'activity': 'Subway to First Activity',
                                      'startTime': '08:00',
                                      'endTime': '08:20',
                                      'description': 'Take the subway from the place of stay to the first site, detailing the station names and line.',
                                      'cost': 2.50
                                    },
                                    {
                                      'activity': 'Morning Visit at the Museum',
                                      'startTime': '08:30',
                                      'endTime': '10:00',
                                      'description': 'Explore the history and collections at the museum, located at [museum address].',
                                      'cost': 15
                                    },
                                    {
                                      'activity': 'Walk to next activity',
                                      'startTime': '10:10',
                                      'endTime': '10:30',
                                      'description': 'A scenic walk along [specific route], detailing landmarks to observe en route.',
                                      'cost': 0
                                    }
                                    // Continue the pattern until back to where i stay 
                                  ],
                                  '02/06/24': [
                                    // Repeat the format for subsequent days
                                  ]
                                }
                                Include at least 3 activities each day without counting the transits. Also in your answer i just want the json code, nothing more, no intro or conclusion. Also do not write the \`\`\` JSON before and after, just plain text. In addition do not include the words: uber, walk, walking, subway, bus, transit, taxi in any of the actual activities without considering the transit. You can use those words for activities that are considered transit.`;


    Question=Question+formatInstr;
    const geminiRequest = await generateGeminiRequest(Question);

    const geminiResponse = await geminiService(geminiRequest);
    //testing
    console.log(geminiResponse);
    return geminiResponse;
}