// // import OpenAI from "openai";
const OpenAI = require("openai");
const dotenv = require("dotenv").config();

const openai = new OpenAI({
  //   apiKey: "" + process.env.API_KEY,
});

const main = async () => {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "who is the most famous chess player?" },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
};

main();
