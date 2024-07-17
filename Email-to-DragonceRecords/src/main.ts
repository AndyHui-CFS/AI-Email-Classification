import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import {modelApiHandler} from "./model-api/model-api-handler"; 

//Server configuration
dotenv.config();
const app: Express = express();
var options = {
    index: "./public/index.html"
};
app.use("/", express.static("app", options))
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});