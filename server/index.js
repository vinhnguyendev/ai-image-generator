//imports to set-up server 
import express from "express";
import cors from "cors";

import * as dotenv from "dotenv";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./controller/postRoutes.js"
import dalleRoutes from "./controller/dalleRoutes.js"
import getUser from "./controller/getUser.js"


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/user', getUser);


app.get("/", async (req, res) => {
  res.send("Hello from Server");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    // const port = process.env.PORT || 3000;
    const port = 5050;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
