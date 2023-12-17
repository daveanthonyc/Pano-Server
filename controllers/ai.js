import env from 'dotenv';
env.config();

export const writeAiExpansion = async (req, res) => {
    const googleApiUrl = `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=${process.env.AI_KEY}`
    const modifiedPrompt = "You are in the role of a writing assistant, please answer the prompt succintly: " + req.body.prompt
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            prompt: { "text": modifiedPrompt },
            model: "gemini-pro"
        })
    }

    try {
        const aiRes = await fetch(googleApiUrl, requestOptions);
        const data = await aiRes.json();
        res.status(200).json({message: data.candidates[0].output});
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
