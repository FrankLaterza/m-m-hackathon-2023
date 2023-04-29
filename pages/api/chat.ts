import {NextApiRequest, NextApiResponse} from "next";

import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function createMessage(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prompt = req.body;
    console.log(prompt);

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "say hello world",
        temperature: 0.6,
        max_tokens: 2048,
    });
    res.status(200).json({result: completion.data.choices[0].text});

    // res.status(200).json({res: "John Doe"});
}
