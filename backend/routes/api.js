
const { Configuration, OpenAIApi, default: OpenAI } = require('openai');


export async function Chat(req, res) {
  const { message } = req.body;
  const systemPrompt = `
You are a helpful and knowledgeable assistant. Your task is to engage in a conversation with the user, providing clear, accurate, and relevant information based on their input. Follow these guidelines:

1. Understand the user's intent and respond appropriately.
2. Provide detailed and informative answers to the user's questions.
3. Maintain a friendly and professional tone throughout the conversation.
4. Ensure clarity and coherence in your responses.
5. If you need more information to answer a question, ask the user for clarification.
6. Avoid providing sensitive or inappropriate content.
7. Strive to be concise while thorough in your explanations.
`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7, 
    });

    // Extract the assistant's message from the response
    const Messages = completion.data.choices[0].message.content;

    console.log("Received content:", Messages);

    return res.status(200).json({ response: assistantMessage });
  } catch (error) {
    console.error("Error generating response:", error);

    // Handle specific OpenAI errors
    if (error.response) {
      return res.status(error.response.status).json({
        error: error.response.data,
      });
    } else {
      // Handle generic server errors
      return res.status(500).json({ error: 'Failed to generate a response.' });
    }
  }
};

module.exports = Chat;
