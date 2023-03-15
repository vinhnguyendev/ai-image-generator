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
  console.log("DaLL-E POST ENDPOINT HIT!");
  try {
    const { prompt, size } = req.body;
    const openAiresponse = await openai.createImage({
      prompt,
      n: 1,
      size,
      response_format: "b64_json",
    });
    const image = openAiresponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).json({ sucess: false, message: error });
  }
});

router.route("/").get((req, res) => {
  res.send("DALL-E GET ENDPOINT HIT");
});

export default router;
