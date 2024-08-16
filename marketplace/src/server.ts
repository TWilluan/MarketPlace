import express from "express";
import { getPayLoadClient } from "./getPayLoad";
import { nextApp, nextHandler } from "./nextUtils";
import dotenv from "dotenv"
import path from "path";

const app = express();
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
})
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayLoadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
      }
    }
  });

  //middleware
  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info(`NextJs is started`)
    app.listen(PORT, async () => {
      payload.logger.info(`NextJs APP URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })
};

start();