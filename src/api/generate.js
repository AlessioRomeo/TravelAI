"use server";
import {geminiService, generateGeminiRequest} from "../../controllers/geminiService";

export async function generate(prompt) {
    let Question = "You are a city guide specialist tasked with designing an optimal sightseeing route. The traveler will explore " + prompt.destination +
        " on " + prompt.dates + ", staying at " + prompt.area +
        ". He will be available at " + prompt.time + " each day, the traveler has a daily budget of " + prompt.budget +
        ", he enjoys hobbies like " + prompt.hobbies + ", prefers " + prompt.activityPreference +
        " activities, and likes to use " + prompt.transport + " for transportation. The traveler expressed interest in " +
        prompt.interests + " and confirmed traveling alone with a budget of " + prompt.budget + ".";

    const formatInstr = `Provide your itinerary in JSON format, focusing on alternating transit and activity entries. Each day should start with a transit from the accommodation to the first activity and end with a return transit. Include detailed descriptions, directions, and costs for each segment. Here is the sample structure for each day, actual start and end times will vary, be sure to make it as accurate as you can in the real world scenario, identified by date:

                                {
                                  '02/05/24': [
                                    {
                                      'activity': 'Subway to First Activity',
                                      'startTime': '00:00',
                                      'endTime': '00:00',
                                      'description': 'Take the subway from the place of stay to the first site, detailing the station names and line.',
                                      'cost': 2.50
                                    },
                                    {
                                      'activity': 'Morning Visit at the Museum',
                                      'startTime': '00:00',
                                      'endTime': '00:00',
                                      'description': 'Explore the history and collections at the museum, located at [museum address].',
                                      'cost': 15
                                    },
                                    {
                                      'activity': 'Walk to next activity',
                                      'startTime': '00:00',
                                      'endTime': '00:00',
                                      'description': 'A scenic walk along [specific route], detailing landmarks to observe en route.',
                                      'cost': 0
                                    }
                                    // Continue the pattern
                                  ],
                                  '02/06/24': [
                                    // Repeat the format for subsequent days
                                  ]
                                }
                                Include at least 3 activities each day without counting the transits. Also in your answer i just want the json code, nothing more, no intro or conclusion. Also do not write the \`\`\` JSON before and after, just plain text`;


    Question=Question+formatInstr;
    const geminiRequest = await generateGeminiRequest(Question);

    const geminiResponse = await geminiService(geminiRequest);
    //testing
    console.log(geminiResponse);
    return geminiResponse;
}