import {Configuration, OpenAIApi} from "openai";
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

import type {NextApiRequest, NextApiResponse} from "next";

type Data = {
    res: string | undefined;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    console.log('yay');
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "say hello world",
        temperature: 0.3,
        max_tokens: 300,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });

    const data = response.data;
    console.log(data)
    if (response.status === 200) {
        res.status(200).json({res: data.choices[0].text});

    } else {
        throw new Error(
            `OpenAI API request failed with status code ${response.status}`
        );
    }
}
