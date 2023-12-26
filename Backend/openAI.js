const OpenAI = require("openai");
const dotenv = require("dotenv").config();
const axios = require("axios");

// convert itemlist array to only words array
const onlyWords = (itemList) => {
  let res = [];
  res = itemList.map((item) => item.name);
  return res;
};
// middle = type array
const makeScript = (itemList) => {
  const firstSent = "I have ";
  const lastSent =
    " in my kitchen.  What can i make out of it ? what are the popular options";
  const middleSent = itemList.join(",");
  let wholeSent = firstSent + middleSent + lastSent;
  return wholeSent;
};

const sendGPTReq = (wholeSent) => {
  const openai = new OpenAI({
    apiKey: "" + process.env.API_KEY,
  });
  const main = async () => {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: wholeSent },
      ],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0];
  };

  return main();
};

module.exports = {
  makeScript,
  sendGPTReq,
  onlyWords,
};

// const main = async () => {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       { role: "system", content: "You are a helpful assistant." },
//       { role: "user", content: "who is the most famous chess player?" },
//     ],
//     model: "gpt-3.5-turbo",
//   });

//   console.log(completion.choices[0]);
// };

// main();
