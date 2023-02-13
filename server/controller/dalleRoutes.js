import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").post(async (req, res) => {
    console.log('DaLL-E POST ENDPOINT HIT!')
  try {
    const { prompt } = req.body;
    const openAiresponse = await openai.createImage({
      prompt,
      n: 1,
      size: "512x512",
      response_format: 'b64_json',
    });
    const image = openAiresponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
  }
});

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E");
});

export default router;
