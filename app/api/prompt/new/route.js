import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const POST = async (req) => {
    const {userId, prompt, tag}= JSON.parse(req.body);

    // console.log(req.body.prompt)

    try {
        await connectToDB();
        const newPrompt=  await Prompt.create({
            creator: userId,
            prompt,
            tag
        })
        
        // await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {status:201})
    } catch (error) {
        // console.log(error)
       

        return new Response("Failed to creare a new prompt", {status:500})
    }
}