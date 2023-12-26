// importing
const OpenAI = require("openai");
const dotenv = require("dotenv").config();
const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

// importing from openAI.js
const { onlyWords, makeScript, sendGPTReq } = require("./openAI");

// express
const app = express();
const port = 3000;

//  parse incoming request bodies
app.use(bodyParser.json());
// used when your frontend and backend works in differnt url
app.use(cors());

app.get("/home", (req, res) => {
  // handle request and send a response
  res.json({ message: "Hello from backend" });
});

app.post("/home", async (req, res) => {
  console.log("Hello from front end");
  itemList = req.body.itemList;
  itemList = onlyWords(itemList);
  let wholeSent = makeScript(itemList);
  let gptRes = await sendGPTReq(wholeSent);
  let result = gptRes.message.content;
  // let result = "this demo result from chatgpt";
  console.log(result);
  res.json({ message: result });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
